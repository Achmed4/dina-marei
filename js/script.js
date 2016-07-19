(function() {

    var searchButton = $('#search-btn');
    searchButton.on('click', function() {
        $('header > section div form').toggleClass('toggle');
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

}());
