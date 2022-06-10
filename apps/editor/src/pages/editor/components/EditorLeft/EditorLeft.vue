<script setup lang="ts">
import MaterialBlock from '../MaterialBlock/MaterialBlock.vue';
import { getMaterialDefaultProps, materialList } from '@/data';
import { IMaterial, PageElement } from '@lc/shared';
import { useProjectStore } from '@/store';
import './EditorLeft.scss';

const projectStore = useProjectStore();

const onClick = (e: Event, m: IMaterial) => {
  console.log('click', m);
  const element = PageElement.create();
  element.mId = m.id;
  element.mVersion = m.version;
  element.props = getMaterialDefaultProps(m);
  projectStore.addElement(element);
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
