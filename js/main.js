(() => {

let teamButtons = document.querySelectorAll('.button')
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector('.close')
  teamDesc = document.querySelector(".team-info")

const teamData = [
["Megan",`Hi I'm Megan`],
["Claire",`Hi I'm Claire`],
];

function showLightbox() {
  //pop open lightbox and show content
  //debugger
  lightBox.classList.add('show-lightbox');
  teamDesc.textContent = `${teamData[this.dataset.offset][1]}`;
}

function hideLightbox(){
  lightBox.classList.remove('show-lightbox');
}


teamButtons.forEach(button => button.addEventListener("click", showLightbox));
closeLightbox.addEventListener("click", hideLightbox)
})();
