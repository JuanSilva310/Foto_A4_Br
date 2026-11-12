
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .catch((error) => {
        console.error('Erro ao registrar o Service Worker:', error);
      });
  });
}

