<template>
  <div class='navbar bg-base-100'>
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
      <a class='btn btn-ghost normal-case text-xl'>daisyUI</a>
    </div>

    <div class='navbar-center hidden lg:flex'>
      <ul class='menu menu-horizontal p-0'>
        <li><a>Item 1</a></li>
        <li tabindex='0'>
          <a>
            Parent
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
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>

    <div class='navbar-end'>
      <button class='btn btn-ghost'>
        <svg
          class='h-5 w-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2' />
        </svg>
      </button>
      <button class='btn btn-ghost'>
        <div class='indicator'>
          <svg
            class='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2' />
          </svg>
          <span class='badge badge-xs badge-primary indicator-item'></span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>
