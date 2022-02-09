jQuery(document).on( 'wbk_on_form_rendered', function(){
    var service_id = jQuery('#wbk-service-id').val();
    if( service_id == 25 || service_id == 26 ){
        jQuery('#wbk-book-quantity').css('display', 'none');
        jQuery("label[for='wbk-quantity']").remove();
    }   
});
