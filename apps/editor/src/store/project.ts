import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { IProject, PageElement, Project } from '@lc/shared';

const p = Project.create();

export const useProjectStore = defineStore('project', () => {
  const project = ref<IProject>(p.getJson());
  const currentPageIndex = ref(0);
  const currentPage = computed(() => project.value.pages[currentPageIndex.value]);

  const currentElementIndex = ref(0);
  const currentElementId = ref();
  const currentElement = computed(() => {
    if (currentElementId.value) {
      return p.getPageByIndex(currentPageIndex.value).getElementById(currentElementId.value);
    }
    return currentPageElements[currentElementIndex.value];
  });

  function setCurrentElement(id: string) {
    currentElementId.value = id;
  }

  const currentPageElements = computed(() => project.value.pages[currentPageIndex.value].elements);

  const addElement = (e: PageElement) => {
    currentElementId.value = e.id;
    p.getPageByIndex(currentPageIndex.value).addElement(e);
    project.value = p.getJson();
  };

  const changeElementProps = (props: Record<string, any>) => {
    const element = p.getPageByIndex(currentPageIndex.value).getElementById(currentElement.value.id);
    element.props = {
      ...element.props,
      ...props
    };
    project.value = p.getJson();
  };

  const changeElementStyle = (style: Record<string, any>) => {
    const element = p.getPageByIndex(currentPageIndex.value).getElementById(currentElement.value.id);
    element.style = {
      ...element.style,
      ...style
    };
    project.value = p.getJson();
  };

  return {
    project,
    currentPage,
    currentPageElements,
    currentElement,
    addElement,
    changeElementProps,
    changeElementStyle,
    setCurrentElement
  };
});
