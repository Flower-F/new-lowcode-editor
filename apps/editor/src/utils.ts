import { IMaterial } from '@lc/shared';

export function loadMaterials(materials: IMaterial[]) {
  return Promise.all(materials.map((material) => loadScript(material.source)));
}

export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');

    function onLoad() {
      resolve(src);
      scriptElement.onload = scriptElement.onerror = null;
    }

    scriptElement.onload = onLoad;
    scriptElement.onerror = reject;
    scriptElement.src = src;
    scriptElement.crossOrigin = 'anonymous';

    document.head.append(scriptElement);
    loadCss(src.replace('.js', '.css'));
  });
}

export function loadCss(src: string) {
  return new Promise((resolve, reject) => {
    const linkElement = document.createElement('link');

    function onLoad() {
      resolve(src);
      linkElement.onload = linkElement.onerror = null;
    }

    linkElement.rel = 'stylesheet';
    linkElement.onload = onLoad;
    linkElement.onerror = reject;
    linkElement.href = src;
    linkElement.crossOrigin = 'anonymous';

    document.head.append(linkElement);
  });
}
