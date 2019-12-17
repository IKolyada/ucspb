$(function(){
    $('.menuToggle').on('click', function() {
       $('.overlay').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });      

    });
});

$(function(){
    $('.show_popup').on('click', function() {
       $('.callback-form').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
            
       });      
    
    });

    $('.close').click(function() { 
        $('.callback-form').hide();     
    })
});


