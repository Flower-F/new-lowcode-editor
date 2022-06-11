<script setup lang="ts">
import { getMaterialEditorProps, materialMap } from '@/data';
import { useProjectStore } from '@/store';
import { computed } from 'vue';
import './EditorRight.scss';

const projectStore = useProjectStore();
const editorProps = computed(() => {
  if (projectStore.currentElement === undefined) {
    return undefined;
  }
  return getMaterialEditorProps(materialMap[projectStore.currentElement.mId]);
});
const elementProps = computed(() => {
  if (projectStore.currentElement === undefined) {
    return undefined;
  }
  return projectStore.currentElement.props;
});
const isShown = computed(() => editorProps.value !== undefined);

const onPropsChange = (e: Event) => {
  projectStore.changeElementProps({
    src: (e.target as HTMLInputElement).value
  });
};
</script>

<template>
  <div class="editor-right">
    <input v-if="isShown" type="text" :value="elementProps.src" @change="onPropsChange($event)">
  </div>
</template>
