function showPopup(title, message) {
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupMessage").textContent = message;

  const popupModal = new bootstrap.Modal(document.getElementById("popupModal"));
  popupModal.show();
}

function showWelcome() {
  showPopup("Selamat Datang di NopirCorp 🚀", "Kami siap bantu bisnismu tumbuh dengan solusi digital terbaik!");
}

function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showPopup("Gagal 😢", "Semua kolom wajib diisi brayyy!");
  } else {
    showPopup("Berhasil 🎉", `Terima kasih ${name}! Pesanmu telah dikirim ke tim kami.`);
    document.getElementById("contactForm").reset();
  }
}
