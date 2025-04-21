let frontEnd = document.querySelector("#frontend-link");
let arch = document.querySelector("#architect-link");
let sectionTitle = document.querySelector("h4");
console.log(sectionTitle);

frontEnd.addEventListener("mouseover", showImageFrontEnd);
frontEnd.addEventListener("mouseleave", hideImageFrontEnd);

arch.addEventListener("mouseover", showImageArch);
arch.addEventListener("mouseleave", hideImageArch);

function showImageFrontEnd() {
  frontEnd.classList.add("frontend-link-hover");
}

function hideImageFrontEnd() {
  frontEnd.classList.remove("frontend-link-hover");
}

function showImageArch() {
  arch.classList.add("architecture-link-hover");
}

function hideImageArch() {
  arch.classList.remove("architecture-link-hover");
}
