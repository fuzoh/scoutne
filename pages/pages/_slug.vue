<template>
  <article>
    <NuxtContent
      :document='page'
      class='prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto' />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('pages', params.slug).fetch()

    return {
      page
    }
  },
  head() {
    return {
      title: this.page.title
    }
  }
}
</script>
