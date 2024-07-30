// Fungsi untuk hitungan mundur
function updateCountdown() {
  const weddingDate = new Date("August 12, 2024 10:00:00").getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML = `
    ${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik
  `;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = "Hari Bahagia Telah Tiba!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Fungsi untuk menampilkan galeri foto
// ...

// Fungsi untuk menangani RSVP
function toggleRSVP() {
  const rsvpForm = document.getElementById("rsvp-form");
  rsvpForm.classList.toggle("hidden");
}

function submitRSVP() {
  // ... (logika untuk mengirimkan data RSVP)
}


// Fungsi untuk menampilkan peta lokasi
// ...
