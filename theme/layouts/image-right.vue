<script setup lang="ts">
import Default from "./default.vue";
import {handleBackground} from "../layoutHelper";
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
  },
})

const style = computed(() => handleBackground(props.image))
</script>
<template>
<Default size="sm">
  <div class="grid grid-cols-2 h-full">
    <div class="p-10">
      <slot></slot>
    </div>
    <div class="w-full w-full" :style="style" />
  </div>
</Default>
</template>
