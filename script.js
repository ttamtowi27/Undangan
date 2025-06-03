
function openInvitation() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("invitation").classList.remove("hidden");
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  if (to) {
    document.getElementById("guest-name").innerText = "Kepada Yth. " + decodeURIComponent(to);
  }
}
