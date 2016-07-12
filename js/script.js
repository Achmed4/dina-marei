(function() {

    var searchButton = $('#search-btn');
    searchButton.on('click', function() {
        $('header section div form').toggleClass('toggle');
    });

    // Adding Active Class to Nav Links
    $('header nav ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Adjusting Nav Menu on Mobile
    $('header main nav > button').on('click', function() {
        $('header main nav > ul').fadeIn('300');
        // Hide Body Scroll
        $('body').css('overflow', 'hidden');
    });
    $('header main nav > ul span').on('click', function() {
        $('header main nav > ul').fadeOut('300');
        // Show Body Scroll
        $('body').css('overflow-y', 'visible');
    });

    // Trigger Main Carousel
    $('figure > div').slick({
        prevArrow: "<i class='angle right icon'></i>",
        nextArrow: "<i class='angle left icon'></i>",
    });

    // Trigger Carousel2
    $('.carousel2').slick({
        infinite: true,
        prevArrow: "<i class='angle right icon'></i>",
        nextArrow: "<i class='angle left icon'></i>",
        slidesToShow: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
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

    //Adding Active Class to Products Links on click
    $('figure ~ section > div ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Trigger carousel3
    $('.carousel3').slick({
        infinite: true,
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
