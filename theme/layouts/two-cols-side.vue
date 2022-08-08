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
  <div class="w-full p-10 my-auto grid grid-cols-5">
    <div class="col-span-4">
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
    <div class="col-span-1 opacity-90 text-right text-sm children:mb-2">
      <h2 class="!mt-3">Highlights</h2>
      <slot name="highlights" />
      <h2>Modules</h2>
      <slot name="modules" />
    </div>
  </div>
</Default>
</template>
