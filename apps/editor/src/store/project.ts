import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { IProject, PageElement, Project } from '@lc/shared';

const p = Project.create();

export const useProjectStore = defineStore('project', () => {
  const project = ref<IProject>(p.getJson());
  const currentPageIndex = ref(0);

  const currentPage = computed(() => project.value.pages[currentPageIndex.value]);
  const currentPageElements = computed(() => project.value.pages[currentPageIndex.value].elements);

  const addElement = (e: PageElement) => {
    p.getPageByIndex(currentPageIndex.value).addElement(e);
    project.value = p.getJson();
  };

  return {
    project,
    currentPage,
    currentPageElements,
    addElement
  };
});
