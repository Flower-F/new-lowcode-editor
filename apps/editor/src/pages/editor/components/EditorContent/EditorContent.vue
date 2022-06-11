<script setup lang="ts">
import { useProjectStore } from '@/store';
import { materialMap } from '@/data';
import './EditorContent.scss';
import VueDragResize from 'vue-drag-resize-next';
import 'vue-drag-resize-next/lib/style.css';

const projectStore = useProjectStore();

function onDragEnd(e: any) {
  let { x, y, ...reset } = e;
  x = Math.max(x, 0);
  x = Math.min(x, 554 - reset.width);
  projectStore.changeElementStyle({
    left: x,
    top: y,
    ...reset
  });
}
</script>

<template>
  <div class="editor-content">
    <div v-for="item in projectStore.currentPageElements" :key="item.id">
      <VueDragResize
        :active="projectStore.currentElement?.id === item.id"
        :x="item.style.left || 0"
        :y="item.style.top || 0"
        :width="item.style.width"
        :height="item.style.height"
        :rotatable="false"
        :immediate="true"
        @dragging="onDragEnd"
        @resizing="onDragEnd"
        @click="projectStore.setCurrentElement(item.id)"
      >
        <component
          v-if="projectStore.isLoaded(item.mId)"
          v-bind="item.props"
          :is="materialMap[item.mId].name"
        />
        <div v-else>loading</div>
      </VueDragResize>
    </div>
  </div>
</template>
