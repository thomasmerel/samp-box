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
    Object.keys(jsonFile).forEach(function(key){
	console.log(key);
        htmlConstructor({name: key, value: jsonFile[key]});
    });
}

function htmlConstructor(jsonButton){
    console.log(jsonButton);
    var button = '<a class="waves-effect waves-light btn" onClick="play(this)" data-button-name="'+jsonButton.name+'" data-sound-uri="'+jsonButton.value+'" href="#">'+jsonButton.name+'</a>';
    $('#buttons-lib').append(button);
}

function play(button){
    console.log(button);
	var url = button.getAttribute('data-sound-uri');
	new Audio(url).play();
}


