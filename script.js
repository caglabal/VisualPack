// Get the modal
var modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.querySelector(".img01");
var captionText = document.querySelector(".caption");

// Get all buttons with the class myBtn
var btns = document.querySelectorAll(".myBtn");

// Get all images with the class myImg
var imgs = document.querySelectorAll(".myImg");

// Loop through all buttons to attach click event listeners
btns.forEach(function(btn, index) {
  btn.onclick = function() {
    modal.style.display = "block";
    modalImg.src = imgs[index].src;
    captionText.innerHTML = imgs[index].alt;
  }
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x) or outside the modal, close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}