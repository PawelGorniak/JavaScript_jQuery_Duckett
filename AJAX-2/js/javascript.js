var xhr = new XMLHttpRequest();

xhr.onload = function(){
    if(xhr.status === 200) {
        var responseObject = JSON.parse(xhr.responseText);
        
        var newContent = '';

        for (var i = 0; i < responseObject.events.length; i+=1){
            newContent += '<div id="event">';
            newContent += '<img src="' + responseObject.events[i].map + '" ';
            newContent += 'alt = "' + responseObject.events[i].location + '" />';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p></div>';

            document.getElementById("content").innerHTML = newContent;

        }
    }
};

xhr.open('GET','data/data.json', true);
xhr.send(null);