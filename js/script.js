(function() {

    var searchButton = $('#search-btn');
    searchButton.on('click', function() {
        $('header section div form').toggleClass('toggle');
    });

    $('header nav ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('header main nav > button').on('click', function() {
        $('header main nav > ul').fadeIn('300');
    });
    $('header main nav > ul span').on('click', function() {
        $('header main nav > ul').fadeOut('300');
    });

}());
