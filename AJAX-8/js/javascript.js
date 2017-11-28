$(function() {
$('nav a').on('click', function(e){
    e.preventDefault();
    var url = this.href;

    //$('#content').load(url + ' #content').hide().fadeIn('slow');
    $.ajax({
        type: "POST",
        url: url,
        data: String,
        success: function(response){
            var $getHTML = $(response);
            
            $('#content').html($getHTML.filter('#content'));
        }
    });
});
});