<template>
  <div class="card card-compact w-full bg-base-100 shadow-xl">
    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
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
  }
}
</script>

<style scoped>

</style>
