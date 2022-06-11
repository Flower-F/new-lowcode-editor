import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { IMaterial, IProject, PageElement, Project } from '@lc/shared';
import { getMaterialDefaultProps, getMaterialRenderFunction } from '@/data';
import { loadMaterial } from '@/utils';
import app from '@/app';

const p = Project.create();

export const useProjectStore = defineStore('project', () => {
  const project = ref<IProject>(p.getJson());
  const currentPageIndex = ref(0);
  const currentPage = computed(() => project.value.pages[currentPageIndex.value]);

  const currentElementIndex = ref(0);
  const currentElementId = ref();

  const currentPageElements = computed(() => project.value.pages[currentPageIndex.value].elements);

  const currentElement = computed(() => {
    if (currentElementId.value) {
      return p.getPageByIndex(currentPageIndex.value).getElementById(currentElementId.value);
    }
    return currentPageElements[currentElementIndex.value];
  });

  const materials = ref<Record<string, IMaterial>>();

  function setCurrentElement(id: string) {
    currentElementId.value = id;
  }

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

  const load = async (material: IMaterial) => {
    if (isLoaded(material.id)) {
      return;
    }
    await loadMaterial(material);
    const renderFunction = getMaterialRenderFunction(material);
    app.component(material.name, renderFunction);
    materials.value = {
      ...materials.value,
      [material.id]: material
    };

    changeElementProps(getMaterialDefaultProps(material));
  };

  const isLoaded = (mId: number) => materials.value?.[mId];

  return {
    project,
    currentPage,
    currentPageElements,
    currentElement,
    addElement,
    changeElementProps,
    changeElementStyle,
    setCurrentElement,
    load,
    isLoaded
  };
});
