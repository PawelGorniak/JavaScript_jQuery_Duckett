$(function(){
var $listItems = $('li');
var $list = $('ul');
function updateCount () {
    var $countActive = $('li.active').length;
    $('p span').text($countActive);
}    


// add new item

var $form = $('#newItemForm');
var $newItem = $('#addButton');
var $buttonNewItem = $('#showForm');
var $newName = $('#itemDescription');

$buttonNewItem.on('click', function() {
    $form.show();
    $buttonNewItem.hide();
});

$form.on('submit', function(e){
    
e.preventDefault();
$('ul').prepend('<li class = \"active\">' + $('input:text').val() + '</li>');
console.log($('li'));
updateCount();
$form.hide();
$buttonNewItem.show();


})

$('ul').on('click', 'li', function(){
  
    if ($(this).hasClass('active')){
        $(this)
        .insertAfter($list.children().last())
        .attr('class','done');
        updateCount();
    }
    else if($(this).attr('class') == 'done'){
        $(this).remove();
        updateCount();
    }
});

});