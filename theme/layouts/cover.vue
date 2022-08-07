<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
import Default from "./default.vue";

const box = ref()
const vite = ref()

const refs = [box, vite]

refs.forEach((ref, index) => {
  const { variant } = useMotion(ref, {
    initial: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 320,
        damping: 20,
        delay: 500 * index,
        onComplete: () => {
          variant.value = 'levitate'
        },
      },
    },
    levitate: {
      y: 15,
      transition: {
        duration: 1500,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      },
    },
  })
})

</script>
<template>
<Default>
  <div class="slidev-layout cover w-full">
    <div class="my-auto w-full">
      <div class="mb-20">
        <div ref="box" class="inline-block pointer-events-none mr-10">
          <logos-laravel height="60" width="60" class="h-60px" />
        </div>
        <div ref="vite" class="inline-block ">
          <logos-vitejs height="60" width="60" class="h-60px" />
        </div>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</Default>
</template>
