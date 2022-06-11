import { IProject } from '@lc/shared';
import { getMaterialRenderFunction, materialMap } from '@/data';
import { onMounted, ref } from 'vue';
import { loadMaterial } from '@/utils';
import app from '@/app';

export function useMaterial() {
  const project: IProject = JSON.parse(localStorage.getItem('__project'))||'{}';
  const materials = project.pages[0].elements.map(item => materialMap[item.mId]);

  const loading = ref(false);
  onMounted(() => {
    loading.value = true;
    Promise.all(Object.values(materials).map(loadMaterial)).then(() => {
      materials.forEach(m => {
        app.component(m.name, getMaterialRenderFunction(m));
      });
      loading.value = false;
    });
  });

  return {
    loading,
    pages: project.pages
  };
}
