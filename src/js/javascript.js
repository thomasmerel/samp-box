$(function(){
        
    var jsonURL = 'http://sampbox.thomas-merel.fr/src/config/buttons.json'
    console.log(jsonURL);
	getJSON(jsonURL);
});

function getJSON(url){
    $.getJSON( url, function(json) {
	console.log(json);
        managerJSON(json);
    });
}

function managerJSON(jsonFile){
    jsonFile.forEach(function(element){
        htmlConstructor(element);
    });
}

function htmlConstructor(jsonButton){
    console.log(jsonButton);
    var button = '<a class="waves-effect waves-light btn" onClick="play(this)" data-button-tags="'+jsonButton.tag+'" data-button-name="'+jsonButton.text+'" data-sound-uri="'+jsonButton.uri+'" href="#">'+jsonButton.text+'</a>';
    $('#buttons-lib').append(button);
}

function play(button){
    console.log(button);
    new Audio('<url>').play();
}


