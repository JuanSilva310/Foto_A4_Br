
(() => {
  const parametros = new URLSearchParams(window.location.search);

  if (parametros.get('aviso') === 'exibido') {
    window.history.replaceState({}, document.title, window.location.pathname);
    return;
  }

  window.location.replace('./aviso.html');
})();
