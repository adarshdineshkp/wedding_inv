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

