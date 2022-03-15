<template>
  <div
    class='hero h-96'
    :style="backgroundImageStyles">
    <div class='hero-overlay bg-opacity-60'></div>
    <div class='hero-content text-center text-neutral-content'>
      <div class='max-w-md'>
        <h1 class='mb-5 text-5xl font-bold'>Aventure, amitiés et camps</h1>
        <p class='mb-5'>Découvre le monde du scoutisme Neuchâtelois, tu trouve ici les informations sur les activités et groupes scouts du canton.</p>
        <button class='btn btn-primary'>Trouver un groupe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandscapeHero',
  computed: {
    backgroundImageStyles () {
      const imgUrl = this.$img('images/IMG_0178.JPG', { width: 1000 })
      return {
        backgroundImage: `url('${imgUrl}')`
      }
    }
  }
}
</script>
