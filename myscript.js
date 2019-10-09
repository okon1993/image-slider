var nextBtn = document.querySelector(".nextBtn");
var prevBtn= document.querySelector(".prevBtn");
var imageSlider = document.querySelector(".images");

var counter = 0;

nextBtn.addEventListener("click", nextSlide);
function nextSlide(){
    counter++;
    imageSlider.style.backgroundImage = `url(images/image-${counter}.jpg)`;
    if(counter === 14){
        counter = -1
    }
    imageSlider.animate([{opacity: "0.1"},{opacity: "1.0"}],
    {duration: 2000, fill: "forwards"});  
}

prevBtn.addEventListener("click", prevSlide);
function prevSlide(){
    counter--;
    imageSlider.style.backgroundImage = `url(images/image-${counter}.jpg)`; 
    if(counter === 0){
        counter = 15
    }
    imageSlider.animate([{opacity: "0.1"},{opacity: "1.0"}],
    {duration: 1000, fill: "forwards"}); 
}