<script setup lang="ts">
import './MaterialBlock.scss';

interface IMaterialBlock {
  title: string;
}

const { title } = defineProps<IMaterialBlock>();
</script>

<template>
  <div class="material-block">{{ title }}</div>
</template>
