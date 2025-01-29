// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the images and descriptions
var galleryItems = document.querySelectorAll('.gallery-item');
var modalImg = document.getElementById("modalImg");
var modalDescription = document.getElementById("modalDescription");

// Loop through gallery items and add click event
galleryItems.forEach(function(item) {
  item.onclick = function() {
    modal.style.display = "block";
    
    // Get the image source and description
    var imgSrc = this.querySelector('img').src;
    var description = this.querySelector('.gallery-description').innerHTML;
    
    // Set the modal image and description
    modalImg.src = imgSrc;
    modalDescription.innerHTML = description;
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalDescription.innerHTML = '';  // Clear the description after closing
};

// Function to toggle fullscreen mode
var fullscreenBtn = document.getElementById("fullscreenBtn");

fullscreenBtn.onclick = function() {
    if (!document.fullscreenElement) {
        modalImg.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};

document.addEventListener("DOMContentLoaded", function () {
  const transitionElement = document.createElement("div");
  transitionElement.classList.add("page-transition");
  document.body.appendChild(transitionElement);

  document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function (event) {
          if (link.getAttribute("href").startsWith("#") || link.getAttribute("target") === "_blank") return;
          event.preventDefault();
          const href = link.getAttribute("href");

          transitionElement.classList.add("active");

          setTimeout(() => {
              window.location.href = href;
          }, 500); // Matches CSS transition time
      });
  });
});
