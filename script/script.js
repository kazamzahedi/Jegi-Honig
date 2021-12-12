$(document).ready(function() {
    console.log("I am ready");
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 10000,
    });
    
    var carouselItem = document.getElementsByClassName('carousel-item');
    
    carouselItem.classList.add('adf');
    console.log("movein");
    var carouselCaption = document.getElementsByClassName('.carousel-pation');
    
    if (condition) {
        
    }


});