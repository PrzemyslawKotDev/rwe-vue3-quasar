<template>
<div class="margin">
    <div class="flex flex-wrap justify-between my-card">
        <div class="content-width">
            <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            </q-card>
        </div>
        <div class="content-width flex flex-wrap content-start justify-evenly">
            <q-card bordered class="my-card q-mb-sm">
            <q-card-section>
                <div class="text-h6">Title</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
                aaa
            </q-card-section>
            </q-card>
        </div>
    </div>
    <div class="flex justify-between padding">
        <div class="content-width">
            <q-card class="my-game q-mb-sm">
                <iframe class="responsive-iframe" 
                src="https://wordwall.net/embed/17cca683725145ebaf1b591359a7e805?themeId=23&templateId=49&fontStackId=0" allowfullscreen>
                </iframe>
            </q-card>
        </div>
        <div class="content-width">
            <q-card class="my-game q-mb-sm">
                <iframe class="responsive-iframe"
                src="https://wordwall.net/embed/244734a04fb24e50852d62bb7ed9efab?themeId=44&templateId=73&fontStackId=0" allowfullscreen>
                </iframe>
            </q-card>
        </div>
    </div>
    <div class="padding bottom">
        <q-carousel
            v-model="slide"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-color="white"
            prev-icon="arrow_left"
            next-icon="arrow_right"
            navigation-icon="radio_button_unchecked"
            navigation
            padding
            arrows
            height="400px"
            class="bg-purple text-white shadow-1 rounded-borders"
        >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
            </q-carousel-slide>
            <q-carousel-slide name="info" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</div>

</template>

<script>
 import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<style lang="sass" scoped>
.margin
  margin: 4em 6em
.padding
  padding-top: 3em
.bottom
  margin-bottom: 4em
.content-width
  width: 48.5%
.my-card
  width: 100%
  height: 100%
.my-game
  padding-top: 75%
  overflow: hidden
  width: 100%
  height: 100%
.responsive-iframe 
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%
  height: 100%
</style>