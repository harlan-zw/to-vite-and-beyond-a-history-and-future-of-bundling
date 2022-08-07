<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: 'lg'
  },
})
</script>
<template>
  <div class="slidev-layout section w-full h-full grid">
    <div class="my-auto prose h-full min-w-full flex flex-col justify-center items-center" :class="[`prose-${size}`]">
      <slot />
    </div>
  </div>
</template>
<style>
.slidev-layout {
  --tw-bg-opacity: 1;
  background-color: rgba(17,24,39,var(--tw-bg-opacity));
  background-image: none;
  color: rgba(243,244,246,var(--tw-text-opacity));
}
h1 {
  background: linear-gradient(45deg,#11998e,#23e75e);
  font-weight: 700;
  -webkit-background-clip: text!important;
  -webkit-text-fill-color: transparent!important;
}
.prose li {
  list-style: none;
}
.prose li svg {
  margin: 0 !important;
}
</style>
