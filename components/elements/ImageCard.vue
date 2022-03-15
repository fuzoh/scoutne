<template>
  <div class="card card-compact w-full bg-base-100 shadow-xl">
    <figure><nuxt-img :src="image" :alt="title" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <NuxtLink class="btn btn-primary" :to='path'>Lire</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    title: String,
    path: String,
    description: String,
    image: String
  }
}
</script>
