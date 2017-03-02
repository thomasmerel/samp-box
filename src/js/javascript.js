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
    var button = '<a class="waves-effect waves-light btn" onClick="play(this)" data-button-tags="'+jsonButton.tag+'" data-button-name="'+jsonButton.text+'" data-sound-uri="'+jsonButton.uri+'" href="#">'+jsonButton.text+'</a>';
    $('#buttons-lib').append(button);


    var tag = '<a class="waves-effect waves-light btn" onclick="sortButton(this)" data-button-sort="'+jsonButton.tag+'">'+jsonButton.tag+'</a>';
    $('#tag-lib').append(tag);

}

function play(button){
    var uri=button.attr('data-sound-uri');
    new Audio(uri).play();
}

function sort(button){
    console.log(button);
}
