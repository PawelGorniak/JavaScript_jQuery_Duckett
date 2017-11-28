$(function() {
    

    function loadRates(){
        var dateObj = new Date();
        var hours = dateObj.getHours();
        var minutes = dateObj.getMinutes();
        var second = dateObj.getSeconds();
        if (minutes < 10)
        minutes = "0" + +minutes; 
        if (second < 10)
        second = "0" + +second; 
        var date = dateObj.getDate();
        var month = dateObj.getMonth();
    $.getJSON('data/rates.json').done(
        function(data){
            $('#rates').html("");
            $.each(data, function(key, val) {
                $('#rates').append('<div>' + key + " : " + val + ".");
            } )

        }
    ).fail( function () {$('#rates').html('Niestety wystąpił błąd w polączeniu, spróbuj jeszcze raz.')})
    .always(function(){
        $('#date').html('<br> Kurs z dn. ' + (month+1) + "/" + date + "<br> godz. " + hours + ":" + minutes + ":" + second);
        $('#click').html('<br><div id="click">Kliknij aby pobrać aktualny kurs ...</div><br><a href="#" id="reload">Pokaż kurs walut</a>')
        $('#reload').on('click', function(e){
        e.preventDefault();
        loadRates();
        
        });
    
});

};
loadRates();
});