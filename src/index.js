let frontEnd = document.querySelector("#frontend-link");
let arch = document.querySelector("#architect-link");
let sectionTitle = document.querySelector("h4");
console.log(sectionTitle);

frontEnd.addEventListener("mouseover", showImageFrontEnd);
frontEnd.addEventListener("mouseleave", hideImageFrontEnd);

arch.addEventListener("mouseover", showImageArch);
arch.addEventListener("mouseleave", hideImageArch);

//sectionTitle.addEventListener("mouseover", whiteText);

//function whiteText() {
// sectionTitle.classList.add("white-text");
//}

function showImageFrontEnd() {
  frontEnd.classList.add("frontend-link-hover", "white-text");
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
