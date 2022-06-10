<script setup lang="ts">
import './EditorLeft.scss';
import MaterialBlock from '../MaterialBlock/MaterialBlock.vue';
import { materialList } from '../../../../data';
import { IMaterial } from '@lc/shared';

const onClick = (e: Event, m: IMaterial) => {
  console.log('click', m);
};
</script>

<template>
  <div class="editor-left">
    <div v-for="item in materialList" :key="item.id" class="material" @click="onClick($event, item)">
      <MaterialBlock :title="item.title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
