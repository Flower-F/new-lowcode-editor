<script setup lang="ts">
import { getMaterialEditorProps, materialMap } from '@/data';
import { useProjectStore } from '@/store';
import { computed } from 'vue';
import './EditorRight.scss';

const projectStore = useProjectStore();
const editorProps = computed(() => {
  if (!projectStore.currentElement) {
    return {};
  }
  return getMaterialEditorProps(materialMap[projectStore.currentElement.mId]);
});

const elementProps = computed(() => {
  if (!projectStore.currentElement) {
    return {};
  }
  return projectStore.currentElement.props;
});

const onPropsChange = (e: Event, key: string) => {
  projectStore.changeElementProps({
    [key]: (e.target as HTMLInputElement).value
  });
};
</script>

<template>
  <div class="editor-right">
    <div v-if="projectStore.currentElement === undefined">page props</div>
    <div v-else-if="!projectStore.isLoaded(projectStore.currentElement.mId)">loading</div>
    <div v-else>
      <div v-for="key in Object.keys(editorProps)" :key="key">
        <input
          type="text"
          v-if="editorProps[key].type === 'string'"
          :value="editorProps[key].defaultValue"
          @input="onPropsChange($event, key)"
        />
        <input
          type="number"
          v-else-if="editorProps[key].type === 'number'"
          :value="editorProps[key].defaultValue"
          @input="onPropsChange($event, key)"
        />
        <input
          type="text"
          v-else-if="editorProps[key].type === 'color'"
          :value="editorProps[key].defaultValue"
          @input="onPropsChange($event, key)"
        />
      </div>
    </div>
  </div>
</template>
