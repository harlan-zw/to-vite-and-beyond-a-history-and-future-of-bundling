<script setup lang="ts">
import Default from "./default.vue";

const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
<Default>
  <div class="w-full p-10 my-auto">
    <div>
      <slot></slot>
    </div>
    <div class="grid my-auto grid-cols-2">
      <div class="col-left prose" :class="props.class">
        <slot name="left" />
      </div>
      <div class="col-right prose" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</Default>
</template>
