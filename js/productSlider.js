(function() {

    $('#product-slider').slick({
      infinite: true,
      prevArrow: "<i class='fa fa-angle-left'></i>",
      nextArrow: "<i class='fa fa-angle-right'></i>",
      slidesToShow: 3,
      slidesToScroll: 1,
    });

    $(window).resize(function() {
        $('#product-slider').slick({
          infinite: true,
          prevArrow: "<i class='fa fa-angle-left'></i>",
          nextArrow: "<i class='fa fa-angle-right'></i>",
          slidesToShow: 3,
          slidesToScroll: 1,
        });
    });

    //Initiate ZOOM Plugin
    $("#zoom_01 img").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        responsive: true,
    });

    var imagePath;
    $('#product-slider .image-parent').on('click', function() {
        imagePath = $(this).html();
        $('#zoom_01').html(imagePath).children().elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            responsive: true,
        });
        console.log(imagePath);
    });

}());
