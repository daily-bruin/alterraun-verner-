// Get the modal
var modal = document.getElementById('pic-modal');

// Get the image and insert it inside the modal; use its "alt" text as a caption
var img = document.getElementById('image2');
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

function openModal() {
  var hamster = document.getElementById('image');
  var modalImage2 = document.getElementById("img02");
  var caption2 = document.getElementById("caption");
  hamster.addEventListener('click', function() {
    modal.style.display = "block";
    modalImage2.src = this.src;
    modalImage2.src = this.alt;
    caption2.innerHTML = this.alt;
  })
}
