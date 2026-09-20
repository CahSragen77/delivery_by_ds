let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // munculin tombol "Install Aplikasi" punya Mas Bro sendiri
  document.getElementById('btnInstall').style.display = 'block';
});

document.getElementById('btnInstall').addEventListener('click', () => {
  deferredPrompt.prompt();
});
