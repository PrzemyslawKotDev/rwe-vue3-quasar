<template>
<div class="flex flex-wrap justify-evenly materials-content">
  <div class="filters">
    <q-option-group
      :options="options"
      type="toggle"
      v-model="group"
    />
  </div>
  <div class="material-cards flex flex-wrap content-start justify-evenly">
    <q-card bordered class="my-card q-mb-sm" v-for="item in group">
      <q-card-section>
        <div class="text-h6">Title</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        {{item}}
      </q-card-section>
    </q-card>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref([]),
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2', color: 'green' },
        { label: 'Option 3', value: '3', color: 'red' },
        { label: 'Option 4', value: '4', color: 'black' },
        { label: 'Option 5', value: '5', color: 'brown' },
        { label: 'Option 6', value: '6', color: 'orange' },
        { label: 'Option 7', value: '7', color: 'cyan' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.materials-content
  height: 93vh
  width: 100%
  padding: 2em
.filters
  width: 30%
.material-cards
  width: 64%
.my-card
  width: 32%
  height: 100%
  max-width: 200px
  max-height: 250px
</style>