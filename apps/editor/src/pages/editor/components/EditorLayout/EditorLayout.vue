<script setup lang="ts">
import './EditorLayout.scss';
import EditorLeft from '../EditorLeft/EditorLeft.vue';
import EditorRight from '../EditorRight/EditorRight.vue';
import EditorContent from '../EditorContent/EditorContent.vue';
</script>

<template>
  <div class="editor-layout">
    <div class="editor-layout-left">
      <EditorLeft />
    </div>
    <div class="editor-layout-content">
      <EditorContent />
    </div>
    <div class="editor-layout-right">
      <EditorRight />
    </div>
  </div>
</template>
