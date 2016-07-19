(function() {

    // Trigger Main Carousel
    $('figure > div').slick({
        prevArrow: "<i class='fa fa-angle-right'></i>",
        nextArrow: "<i class='fa fa-angle-left'></i>",
    });

    // Trigger Carousel2
    $('.carousel2').slick({
        infinite: true,
        prevArrow: "<i class='fa fa-angle-right'></i>",
        nextArrow: "<i class='fa fa-angle-left'></i>",
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          },
        ]
    });

    //Adding Active Class to Products Links on click
    $('figure ~ section > div ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Trigger carousel3
    $('.carousel3').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          },
        ]
    });

}());
