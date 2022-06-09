<script setup lang="ts">
const { src } = defineProps<{
  src: string
}>();
</script>

<template>
  <img :src="src">
</template>

<style lang="scss" scoped>
</style>
