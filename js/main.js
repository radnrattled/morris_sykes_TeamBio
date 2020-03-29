(() => {

let teamButtons = document.querySelectorAll('.button')
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector('.close')
  teamDesc = document.querySelector(".team-info")
  titleChange = document.querySelector('h2')

const teamData = [
["Megan",`Hi I'm Megan`],
["Claire",`Hi I'm Claire. I'm 25 years old and grew up in the middle of nowhere, Ontario.
          I'm currently enrolled in Fanshawe's IDP program. In my free time I collect vintage clothing, 
          endulge in photography and watch black & white movies.`],
];

titleData = [
["Megan",`Megan`],
["Claire",`Claire`],
["Reset",`Meet The Team!`],
];

function showLightbox() {
  //pop open lightbox and show content
  //debugger
  lightBox.classList.add('show-lightbox');
  teamDesc.textContent = `${teamData[this.dataset.offset][1]}`;
  titleChange.textContent = `${titleData[this.dataset.offset][1]}`;
}

function hideLightbox(){
  lightBox.classList.remove('show-lightbox');
  titleChange.textContent = `${titleData[this.dataset.offset][2]}`;
}


teamButtons.forEach(button => button.addEventListener("click", showLightbox));
closeLightbox.addEventListener("click", hideLightbox)
})();
