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

    document.head.append(scriptElement);
  });
}
