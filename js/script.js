//BANNIERE

var slides = document.querySelectorAll('.main__banner img');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'inactive';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'active';
}



// ONGLET DEROULANT

var dropdownLink = document.getElementById("dropdownLink");
var dropdownContent = document.getElementById("dropdownContent");

dropdownLink.addEventListener("mouseover", function() {
  dropdownContent.style.display = "block";
});

dropdownLink.addEventListener("mouseout", function() {
  dropdownContent.style.display = "none";
});

function showDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = "block";
  }

function hideDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = "none";
}