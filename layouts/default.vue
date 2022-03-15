<template>

  <div>

    <AppNavigation />

    <Nuxt />

    <AppFooter />

  </div>

</template>

<script>
import AppNavigation from '~/components/layout/AppNavigation'
import AppFooter from '~/components/layout/AppFooter'

export default {
  components: {AppFooter, AppNavigation}
}
</script>
