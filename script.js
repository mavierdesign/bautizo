// Fecha objetivo: 21 de junio de 2025 a las 12:00 PM
const countdownDate = new Date("2025-06-21T12:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<p>¡Ha llegado el gran día!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();



document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 1000, // duración de la animación en milisegundos
      once: true      // solo anima una vez al hacer scroll
    });
  });

 window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

