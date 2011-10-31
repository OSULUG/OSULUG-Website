$(document).ready(function(){

    num_pages = 3;

    // show the first page, hide the rest
    var i = 0;
    for (i=0; i<=num_pages; i++){
        $('div.sliding-index-page' + i).hide();
    }
    current_page = 0;
    $('div.sliding-index-page' + current_page).show();
    $('#sliding-prev-page').hide()

    // previous page
    $('#sliding-prev-page').click(function(){
        $('#sliding-next-page').show()
        if (current_page != 0){
            $('div.sliding-index-page' + current_page).hide('slow');
            current_page--;
            if (current_page == 0){
                $('#sliding-prev-page').hide()
            }
            $('div.sliding-index-page' + current_page).show('slide', {direction:'left'}, 800);                
        }
    });

    // next page
    $('#sliding-next-page').click(function(){
        $('#sliding-prev-page').show()
        if (current_page != num_pages-1){
            $('div.sliding-index-page' + current_page).hide();
            current_page++;
            if (current_page == num_pages-1){
                $('#sliding-next-page').hide()
            }
            $('div.sliding-index-page' + current_page).show('slide', {direction:'right'}, 800);
        }
    });

});
