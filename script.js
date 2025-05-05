document.querySelectorAll('.btn-noticia').forEach(button => {
    button.addEventListener('click', () => {
      const deporte = button.dataset.deporte;
      document.getElementById('modal-title').innerText = `Más sobre ${deporte}`;
      document.getElementById('modal-body').innerText = `Aquí encontrarás más detalles sobre las últimas noticias de ${deporte}. ¡Muy pronto actualizaciones exclusivas!`;
      document.getElementById('modal').style.display = 'block';
    });
  });
  
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  
