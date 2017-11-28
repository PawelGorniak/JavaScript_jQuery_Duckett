var awards = "<div><a href='award.php?award=green'><img src='img/img1.jpg' id='green'></a><a href='award.php?award=red'><img src='img/img2.jpg' id='red'></a><a href='award.php?award=blue'><img src='img/img3.jpg'id='blue'></a></div>";
$('#awards').append(awards);

$('img').on('click', function(e){
    e.preventDefault();
    var query = 'award=' + e.target.id;
    $.get('award.php', query, function(data){
        $('#awards').html(data);
    } );


} );