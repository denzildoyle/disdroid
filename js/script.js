//fade spinner-menu in and out
$(".spinner").click(function() {
    $( ".spinner-menu" ).fadeToggle();
});

//swiper
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop: true,
    paginationClickable: true
})
