<script setup lang="ts">
import { useProjectStore } from '@/store';
import { materialMap } from '@/data';
import { useRouter } from 'vue-router';
import VueDragResize from 'vue-drag-resize-next';
import 'vue-drag-resize-next/lib/style.css';
import './EditorContent.scss';
import { onMounted, ref } from 'vue';

const projectStore = useProjectStore();
const router = useRouter();
const pageRef = ref<HTMLElement>();
let pageWidth = 0;
let pageHeight = 0;

onMounted(() => {
  if (pageRef.value) {
    pageWidth = pageRef.value.offsetWidth;
    pageHeight = pageRef.value.offsetHeight;
  }
});

function onDragEnd(e: any) {
  let { x, y, ...reset } = e;
  x = Math.max(x, 0);
  x = Math.min(x, pageWidth - reset.width);

  y = Math.max(y, 0);
  y = Math.min(y, pageHeight - reset.height);

  projectStore.changeElementStyle({
    left: x,
    top: y,
    ...reset
  });
}

const onSave = () => {
  projectStore.saveProject();
};

const onPreview = () => {
  router.push('/preview');
};
</script>

<template>
  <div class="editor-content">
    <div class="editor-content-header">
      <button @click="onSave">保存</button>
      <button @click="onPreview">预览</button>
    </div>
    <div class="editor-content-page" ref="pageRef">
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
  </div>
</template>
