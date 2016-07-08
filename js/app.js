// Get the modal
var modal = document.getElementById("pic-modal");

// Get the div element that closes the modal
var closeImage = document.getElementsByClassName("close");

// When the user clicks outside the image, close the modal
closeImage.onclick = function() {
  modal.style.display = "none";
}

// Array of images to be placed in modal
var imageArray = ["image1", "image2"];
function openModal(index) {
  var img = document.getElementById(imageArray[index]);
  var modalImage = document.getElementById("modal-placement");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      captionText.innerHTML = this.alt;
  }
}

// Opening all the modals
for (var i = 0; i < imageArray.length; i++) {
  openModal(i);
}

// jQuery and magic.css
  $(".headline").addClass('magictime puffIn');
