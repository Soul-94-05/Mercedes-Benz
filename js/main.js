$(function () {
    $('.design-slider').slick({
        dots: true,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow:'<img class=" arrow arrow-left" src="./img/Arrow left.svg" alt="">',
        nextArrow:'<img class=" arrow arrow-right" src="./img/Arrow right.svg" alt="">',
        responsive:[
            {
                breakpoint: 361,
                settings:{
                    variableWidth:false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});