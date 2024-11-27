// Seleccionamos las cajas
const boxes = document.querySelectorAll('.box');

// Configuramos Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Si la caja está en la pantalla, añadimos la clase 'animate'
      entry.target.classList.add('animate');
    } else {
      // (Opcional) Si quieres que desaparezca al salir, elimina la clase
      entry.target.classList.remove('animate');
    }
  });
}, {
  threshold: 0.1 // Se activa cuando el 10% del elemento está visible
});

// Observamos cada caja
boxes.forEach((box) => observer.observe(box));
