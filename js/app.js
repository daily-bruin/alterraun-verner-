// Get the modal
var modal = document.getElementById('pic-modal');

// Get the image and insert it inside the modal; use its "alt" text as a caption
var img = document.getElementById('image');
var modalImage = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImage.src = this.src;
    modalImage.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the div element that closes the modal
var closeImage = document.getElementsByClassName("close");

// When the user clicks outside the image, close the modal
closeImage.onclick = function() {
  modal.style.display = "none";
}
