<template>
  <div class='navbar bg-base-100 z-50'>
    <div class='navbar-start'>
      <div class='dropdown'>
        <label
          class='btn btn-ghost lg:hidden'
          tabindex='0'>
          <svg
            class='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M4 6h16M4 12h8m-8 6h16'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2' />
          </svg>
        </label>
        <ul
          class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          tabindex='0'>
          <li><a>Item 1</a></li>
          <li tabindex='0'>
            <a class='justify-between'>
              Parent
              <svg
                class='fill-current'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
              </svg>
            </a>
            <ul class='p-2'>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <NuxtLink
        class='btn btn-ghost normal-case text-xl'
        to='/'>
        <img class='h-full' src='/favicon.svg' alt='Logo Scoutisme Neuchâtelois'>
        Scoutisme Neuchâtelois
      </NuxtLink>
    </div>

    <div class='navbar-center hidden lg:flex'>
      <ul class='menu menu-horizontal p-0'>
        <li>
          <a>
            L'association
            <svg
              class='fill-current'
              height='20'
              viewBox='0 0 24 24'
              width='20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
            </svg>
          </a>
          <ul class='p-2 bg-base-100'>
            <li><a>L'équipe cantonale</a></li>
            <li><a>La Coordination cantonale</a></li>
          </ul>
        </li>
        <li><a>Les Groupes</a></li>
        <li><a>Actualités</a></li>
        <li>
          <a>
            Autres
            <svg
              class='fill-current'
              height='20'
              viewBox='0 0 24 24'
              width='20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
            </svg>
          </a>
          <ul class='p-2 bg-base-100'>
            <li><a>Le Scoutisme</a></li>
            <li><a>Calendrier</a></li>
            <li><a>Chalet cantonal du montperreux</a></li>
            <li><a>Documents</a></li>
            <li><a>Contact</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <div class='navbar-end'>
      <div class='dropdown dropdown-end dropdown-hover'>
        <div class='form-control m-1'>
          <input
            v-model='query'
            autocomplete='off'
            class='input input-bordered'
            placeholder='Search'
            type='search'>
        </div>
        <ul
          v-if='results.length'
          class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          tabindex='0'>
          <li
            v-for='result in results'
            :key='result.path'>
            <NuxtLink :to='result.path' @click.native='clear'>{{ result.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      query: '',
      results: []
    }
  },
  watch: {
    async query(query) {

      if (!query) {
        this.results = []
        return
      }

      this.results = await this.$content({ deep: true })
        .only(['title', 'path'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  },
  methods: {
    clear () {
      this.query = ''
      this.results = []
    }
  }
}
</script>
