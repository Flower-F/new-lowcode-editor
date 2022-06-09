<script setup lang="ts">
import BasicHeader from '../BasicHeader/BasicHeader.vue';
import './BasicLayout.scss';
</script>

<template>
  <div class="basic-layout">
    <div class="basic-layout-header">
      <BasicHeader />
    </div>
    <div class="basic-layout-content">
      <slot></slot>
    </div>
  </div>
</template>
