$(function(){
    $('.accordion').on('click', '.accordion-control', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.accordion-panel').not(':animated').slideToggle();
    });
});