$(function (){
$('#register').on('submit', function(e){
    e.preventDefault();
    console.log('test');
    var $formToSend = $('#register').serialize();
    $.post('php/register.php', $formToSend, function(data){
        $('body').html(data);
    } );
});
});
