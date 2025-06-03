
function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("to");
  if (name) {
    document.getElementById("guest-name").textContent = decodeURIComponent(name);
  }
}

function openInvitation() {
  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("invitation").classList.remove("hidden");
}

window.onload = getGuestName;
