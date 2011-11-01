$(document).ready(function(){

    num_pages = 3;

    // show the first page, hide the rest
    var i = 0;
    for (i=0; i<=num_pages; i++){
        $('div.sliding-index-page' + i).hide();
    }
    current_page = 0;
    $('div.sliding-index-page' + current_page).show();
    document.getElementById("sliding-prev-page").disabled = true;
    document.getElementById("sliding-next-page").disabled = false;

    // previous page
    $('#sliding-prev-page').click(function(){
        document.getElementById("sliding-next-page").disabled = false;
        if (current_page != 0){
            $('div.sliding-index-page' + current_page).hide();
            current_page--;
            if (current_page == 0){
                document.getElementById("sliding-prev-page").disabled = true;
            }
            $('div.sliding-index-page' + current_page).show('slide', {direction:'left'}, 800);                
        }
    });

    // next page
    $('#sliding-next-page').click(function(){
        document.getElementById("sliding-prev-page").disabled = false;
        if (current_page != num_pages-1){
            $('div.sliding-index-page' + current_page).hide();
            current_page++;
            if (current_page == num_pages-1){
                document.getElementById("sliding-next-page").disabled = true;
            }
            $('div.sliding-index-page' + current_page).show('slide', {direction:'right'}, 800);
        }
    });

});
