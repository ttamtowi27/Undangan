function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function openInvitation() {
  document.getElementById('envelope').classList.add('hidden');
  document.getElementById('invitation').classList.remove('hidden');
  document.getElementById('bg-music').play();
}

window.onload = function () {
  const name = getQueryParam("to");
  if (name) {
    document.getElementById("guest-name").innerText = "Kepada Yth: " + decodeURIComponent(name);
    document.getElementById("wa-share").href = `https://wa.me/?text=${encodeURIComponent("Hai " + name + ", ini undangan pernikahan kami! " + window.location.href)}`;
  }

  const targetDate = new Date("2025-09-06T01:00:00Z").getTime();
  const countdown = document.getElementById("countdown");
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerText = `Menuju Acara: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }, 1000);
};