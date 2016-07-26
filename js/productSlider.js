(function() {

    $('#product-slider').slick({
      infinite: true,
      prevArrow: "<i class='fa fa-angle-left'></i>",
      nextArrow: "<i class='fa fa-angle-right'></i>",
      slidesToShow: 3,
      slidesToScroll: 1,
    });

    //Initiate ZOOM Plugin
    // var dataZoomImage = $('#zoom_01').data('zoom-image');
    $("#zoom_01 img").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    });

    // $('#product-slider img').on('click', function() {
    //     console.log('dataZoomImage');
    // });

    var imagePath, newDataZoomImage;

    $('#product-slider .image-parent').on('click', function() {
        // newDataZoomImage = $(this).children().data('zoom-image');
        imagePath = $(this).html();
        $('.col #zoom_01').html(imagePath).elevateZoom();
        console.log(imagePath);
    });

}());
