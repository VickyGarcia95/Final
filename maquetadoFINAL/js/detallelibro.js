const libros = {
  1: {
    titulo: "Frankenstein para chicos",
    ilustrador: "Ana Pérez",
    resumen: "Una adaptación divertida y colorida del clásico de Mary Shelley.",
    autor: "Mary Shelley",
    paginas: "40 páginas / Full color / Tapa blanda"
  },
  2: {
    titulo: "Drácula divertido",
    ilustrador: "Lucas Gómez",
    resumen: "Drácula nunca fue tan gracioso. Ideal para primeros lectores.",
    autor: "Bram Stoker",
    paginas: "40 páginas / Full color / Tapa blanda"
  },
  3: {
    titulo: "Mi amigo Lobo",
    ilustrador: "Carla Ruiz",
    resumen: "Una historia clásica contada con humor y dulzura.",
    autor: "Gaston Leroux",
    paginas: "40 páginas / Full color / Tapa blanda"
  }
};
  document.querySelectorAll('.libro').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-id');
      const datos = libros[id];

      document.getElementById('titulo').textContent = datos.titulo;
      document.getElementById('ilustrador').textContent = datos.ilustrador;
      document.getElementById('resumen').textContent = datos.resumen;
      document.getElementById('autor').textContent = datos.autor;
      document.getElementById('paginas').textContent = datos.paginas;

      document.getElementById('ficha-libro').style.display = 'block';
    });
  });

  document.querySelector('.cerrar').addEventListener('click', () => {
    document.getElementById('ficha-libro').style.display = 'none';
  });
