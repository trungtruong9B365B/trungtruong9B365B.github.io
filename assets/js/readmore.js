// Get the modal
var modal = document.getElementById("read-more-modal");

// Get the link that opens the modal
var btn = document.getElementById("read-more-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the link, open the modal
btn.onclick = function(event) {
  event.preventDefault(); // Prevents the link from jumping to the top of the page
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}