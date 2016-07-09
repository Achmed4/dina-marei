(function() {

    var searchButton = $('#search-btn');
    searchButton.on('click', function() {
        $('header section div form').toggleClass('toggle');
    });

    $('header nav ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

}());
