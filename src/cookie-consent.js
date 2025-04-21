function loadStatcounter() {
  const config = document.createElement("script");
  config.innerHTML = `
      var sc_project = 12967848;
      var sc_invisible = 1;
      var sc_security = "0629e2f6";
    `;
  document.body.appendChild(config);

  const script = document.createElement("script");
  script.src = "https://www.statcounter.com/counter/counter.js";
  script.async = true;
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
  const consent = localStorage.getItem("cookieConsent");
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!banner || !acceptBtn) return; // if either is missing, stop early

  if (consent === "true") {
    banner.style.display = "none"; // <- hide banner right away
    loadStatcounter(); // <- and load tracking
  } else {
    banner.style.display = "flex"; // <- show banner if no consent

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      banner.style.display = "none"; // <- hide banner immediately
      loadStatcounter(); // <- load statcounter after consent
    });
  }
});
