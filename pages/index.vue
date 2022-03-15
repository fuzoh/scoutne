<template>
  <div>

    <AppNavigation />

    <LandscapeHero />

    <div class='p-10 columns-3 gap-8'>

      <div class="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '~/components/layout/AppFooter'
import AppNavigation from '~/components/layout/AppNavigation'
import LandscapeHero from '~/components/elements/LandscapeHero'
export default {
  name: 'IndexPage',
  components: { LandscapeHero, AppNavigation, AppFooter }
}
</script>
