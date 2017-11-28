function buses(data){
        var newContent = '';

        for (var i = 0; i < data.events.length; i+=1){
            newContent += '<div id="event">';
            newContent += '<img src="' + data.events[i].map + '" ';
            newContent += 'alt = "' + data.events[i].location + '" />';
            newContent += '<p><b>' + data.events[i].location + '</b><br>';
            newContent += data.events[i].date + '</p></div>';

            document.getElementById("content").innerHTML = newContent;

        }
    };