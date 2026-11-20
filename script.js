document.body.classList.add("js-hidden");

document.getElementById("open-invitation").addEventListener("click", () => {
  document.getElementById("envelope").classList.add("opened");
  const invitation = document.getElementById("invitation");
  invitation.classList.add("opened");
  invitation.setAttribute("aria-hidden", "false");
  document.body.classList.remove("js-hidden");
});

document.getElementById("reveal-details").addEventListener("click", event => {
  const button = event.currentTarget;
  const details = document.getElementById("wedding-details");
  details.hidden = false;
  requestAnimationFrame(() => details.classList.add("visible"));
  details.setAttribute("aria-hidden", "false");
  button.setAttribute("aria-expanded", "true");
  button.querySelector(".reveal-label").textContent = "Wedding details revealed";
  button.querySelector(".reveal-hint").textContent = "We look forward to seeing you";
  button.disabled = true;
});

const weddingStarts = new Date("2027-01-13T10:00:00");
function updateCountdown() {
  const difference = weddingStarts.getTime() - Date.now();
  const values = difference > 0
    ? [Math.floor(difference / 86400000), Math.floor(difference / 3600000) % 24, Math.floor(difference / 60000) % 60, Math.floor(difference / 1000) % 60]
    : [0, 0, 0, 0];
  ["days", "hours", "minutes", "seconds"].forEach((id, index) => {
    document.getElementById(id).textContent = String(values[index]).padStart(index === 0 ? 3 : 2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
