$(function(){
        
    var jsonURL = 'http://soundboard.thomas-merel.fr/config.json'
        
    getJSON(jsonURL, initialStep);
        
});

function getJSON(url){
    $.getJSON( url, function(json) {
        managerJSON(json);
    });
}

function managerJSON(jsonFile){
    Object.keys(jsonFile).forEach(function(key){
        htmlConstructor({name: key, value: jsonFile[key]});
    });
}

function htmlConstructor(jsonButton){

    var button = '<a class="waves-effect waves-light btn" onClick="play(this)" data-button-name="'+jsonButton.name+'" data-sound-uri="'+jsonButton.value+'" href="#">'+jsonButton.name+'</a>';
    $('#button-lib').append(button);
}
