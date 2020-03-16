(() => {

let teamButtons = document.querySelectorAll('.button')
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector('.close')


function showLightbox() {
  //pop open lightbox and show content
  //debugger
  lightBox.classList.add('show-lightbox');
}

function hideLightbox(){
  lightBox.classList.remove('show-lightbox');
}


teamButtons.forEach(button => button.addEventListener("click", showLightbox));
closeLightbox.addEventListener("click", hideLightbox)
})();
