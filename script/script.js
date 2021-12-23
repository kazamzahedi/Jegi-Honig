$(document).ready(function() {
    console.log("I am ready");
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 10000,
        
    });
    
    $(".carousel-caption").addClass("moveselector");
    
});