$(document).ready(function() {
    console.log("I am ready");
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 10000,
        
    });
    
    $(".carousel-caption").addClass("moveselector");
    // const myTimeout = setTimeout(moveTitle, 10000);
    // var carouselItem = docoment.querySelector('.carousel-item');
    // function moveTitle() {

    //     // if (carouselItem == "active") {
    //     //     carouselItem.style.opacity = "0.1"; 
    //     //     console.log("hi");
    //     // }
    //     console.log("hi");

        


    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
            
    // }
    // };
    
    // setTimeout(() => {
    //     $('.carousel-item')
    // }, 10000);

    // var carouselItem = document.getElementsByClassName('carousel-item');
    
    // carouselItem.classList.add('adf');
    // console.log("movein");
    // var carouselCaption = document.getElementsByClassName('.carousel-pation');
    
    // if (condition) {
        
    // }


});