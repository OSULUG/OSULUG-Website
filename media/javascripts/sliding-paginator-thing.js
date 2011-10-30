$(document).ready(function(){

    num_pages = 3;

    // show the first page, hide the rest
    var i = 0;
    for (i=0; i<=num_pages; i++){
        $('div.sliding-index-page' + i).hide();
    }
    current_page = 0;
    $('div.sliding-index-page' + current_page).show();

    // previous page
    $('#sliding-prev-page').click(function(){
        if (current_page != 0){
            $('div.sliding-index-page' + current_page).hide('slow');
            current_page--;
            $('div.sliding-index-page' + current_page).show('slide', {direction:'left'}, 1400);                
        }
    });

    // next page
    $('#sliding-next-page').click(function(){
        if (current_page != num_pages){
            $('div.sliding-index-page' + current_page).hide();
            current_page++;
            $('div.sliding-index-page' + current_page).show('slide', {direction:'right'}, 1000);
        }
    });

});
