(function() {

    var searchButton = $('#search-btn');
    searchButton.on('click', function() {
        $('header > section .container div > form').toggleClass('toggle');
    });

    var socialButton = $('#social-btn');
    socialButton.on('click', function() {
        $('header > section .container div > ul').toggleClass('toggle');
    });

    // Adding Active Class to Nav Links
    $('header nav ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //Adding Positon Fixed to Main Menu on Scroll
    var lastScrollTop = 50;
    $(window).on('scroll', function() {
        var currentscrollTop = $(this).scrollTop();
        if(currentscrollTop > lastScrollTop) {
            $('header > main').addClass('fixed');
            var mainHeaderHeight = $('header main').height();
            $('header ~ figure').css('margin-top', mainHeaderHeight);
            $('header ~ main').css('margin-top', mainHeaderHeight);
        } else {
            $('header > main').removeClass('fixed');
            $('header ~ figure').css('margin-top', 0);
            $('header ~ main').css('margin-top', 0);
        }
        //lastScrollTop = currentscrollTop;
    });

    // Adjusting Nav Menu on Mobile
    // $('header main nav > button').on('click', function() {
    //     $('header main nav > div:last-child ul').fadeIn('300');
    //     $('body').css('overflow', 'hidden');
    // });
    // $('header main nav > ul span').on('click', function() {
    //     $('header main nav > div:last-child ul').fadeOut('300');
    //     $('body').css('overflow-y', 'visible');
    // });

    function openNav() {
        $("header main nav > div:last-child").css('width', '100%');
        $('body').css('overflow', 'hidden');
    }

    function closeNav() {
        $("header main nav > div:last-child").css('width', '0%');
        $('body').css('overflow', 'auto');
    }

    /* Open when someone clicks on the Hamburger button */
    $('#hamburger').on('click', function() {
        openNav();
    });

    /* Close when someone clicks on the "x" symbol inside the mobile menu */
    $('.closebtn').on('click', function() {
        closeNav();
    });

}());
