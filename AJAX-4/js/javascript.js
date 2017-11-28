$(function() {
$('nav a').on('click', function(e){
    e.preventDefault();
    var url = this.href;

    $('#content').load(url + ' #content').hide().fadeIn('slow');
});
});