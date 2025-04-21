console.log("cookie-consent.js is running");
console.log("Accept button:", document.getElementById("accept-cookies"));

function loadStatcounter() {
  console.log("Loading Statcounter..."); // 👈 Add this line

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

  if (consent === "true") {
    console.log("Consent already given — loading Statcounter.");
    loadStatcounter();
  } else if (banner && acceptBtn) {
    banner.style.display = "flex";

    acceptBtn.addEventListener("click", function () {
      console.log("Accept button clicked."); // 👈 Add this line
      localStorage.setItem("cookieConsent", "true");
      banner.style.display = "none";
      loadStatcounter();
    });
  }
});
