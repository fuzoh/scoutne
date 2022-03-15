<template>
  <div>

    <LandscapeHero />

    <div class='p-10 columns-3 gap-8'>

      <ImageCard
        v-for='page in homePages'
        :key='page.path'
        :title='page.title'
        :path='page.path'
        :description='page.description'
        :image='page.image'
      />

    </div>

  </div>
</template>

<script>
import LandscapeHero from '~/components/elements/LandscapeHero'
import ImageCard from '~/components/elements/ImageCard'

export default {
  name: 'IndexPage',
  components: { ImageCard, LandscapeHero },

  async asyncData({ $content }) {
    const homePages = await $content('pages')
      .only(['title', 'path', 'description', 'image'])
      .limit(5)
      .where({ tags: 'home' })
      .fetch()

    return {
      homePages
    }
  }
}
</script>
