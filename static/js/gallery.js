const startButton = document.querySelector("#gallery");
const galleryExternalContainer = document.querySelector(".gallery-external-container");

startButton.addEventListener("click", function(){
    galleryExternalContainer.style.display = "flex";
});

document.getElementById("gallery-external-container").addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches(".close-modal") ||
        !event.target.closest(".gallery")
      ) {
        closeModal()
      }
    },
    false
  )
;
//  Global function, declaring function closeModal()
  function closeModal() {
    document.querySelector(".gallery-external-container").style.display = "none"
  };

let gallery = document.querySelector('#gallery');
let getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
let getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
let resizeAll = function () {
    let altura = getVal(gallery, 'grid-auto-rows');
    let gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        let el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            let altura = getVal(gallery, 'grid-auto-rows');
            let gap = getVal(gallery, 'grid-row-gap');
            let gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
