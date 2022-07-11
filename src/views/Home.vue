<template>
<div class="flex justify-evenly category items-center">
  <q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom flex justify-center items-center full-size">
        Blog
      </div>
    </q-img>
  </q-card>
  <q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom flex justify-center items-center full-size">
        Materiały
      </div>
    </q-img>
  </q-card>
</div>
      <router-view />
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="sass" scoped>
.my-card
  max-width: 40%
.category
  height: 90vh
.full-size
  height: 100%
  width: 100%
  font-size: 3em
  font-weight: 500
</style>