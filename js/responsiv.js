$(function (){
   countStep = $('.form_wizard .form_item').length;
   nbr_step = 0;
   $('.form_wizard footer .progress .progress-bar')
           .css('width',100/countStep+'%');
   
    $('.form_wizard footer input').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        $('.form_wizard footer .progress .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
   
        
        
        $('.form_wizard .steps_liste_view .item')
                .eq(nbr_step).removeClass('loading');
        $('.form_wizard .steps_liste_view .item')
                .eq(nbr_step).addClass('active');
        $('.form_wizard .form_item:visible').hide();
        $('.form_wizard .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.pre_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        
        $('.form_wizard .steps_header .item')
                .eq(nbr_step + 1).removeClass('item_loding');
        $('.form_wizard .steps_header .item')
                .eq(nbr_step + 1).addClass('item_disable');
        
        $('.form_wizard .steps_header .item')
                .eq(nbr_step).removeClass('item_check');
        $('.form_wizard .steps_header .item')
                .eq(nbr_step).addClass('item_loding');
        
        $('.form_wizard .form_item:visible').hide();
        $('.form_wizard .form_item').eq(nbr_step).fadeIn(500);
    });
});