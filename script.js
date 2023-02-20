menu.onclick = function meFunction(){
    var x = document.getElementById('mytopnav')
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav"
    }
}



var slideIndex = 2;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("point");
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" on", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " on";
}