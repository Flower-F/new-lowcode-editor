<script setup lang="ts">
import { materialMap } from '@/data';
import { useMaterial } from './material';

const { loading, pages } = useMaterial();
</script>

<template>
  <div v-if="loading">loading</div>
  <div class="page" v-else>
    <div
      v-for="item in pages[0].elements"
      :key="item.id"
      :style="{
        position: 'absolute',
        left: item.style.left + 'px',
        top: item.style.top + 'px',
        width: item.style.width + 'px',
        height: item.style.height + 'px'
      }"
    >
      <component v-bind="item.props" :is="materialMap[item.mId].name" />
    </div>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  width: 375px;
  height: 667px;
  margin: 0 auto;
}
</style>
