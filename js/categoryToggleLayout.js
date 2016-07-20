(function() {

    $('header ~ main .col > ul li:first-child').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('#vertical-layout').addClass('on');
        $('#horizontal-layout').removeClass('on');
    });

    $('header ~ main .col > ul li:last-child').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('#horizontal-layout').addClass('on');
        $('#vertical-layout').removeClass('on');
    });

}());
