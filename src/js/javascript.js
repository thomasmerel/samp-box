$(function(){
        
    var jsonURL = 'http://sampbox.thomas-merel.fr/src/config/buttons.json'
    
    getJSON(jsonURL);
});

function getJSON(url){
    $.getJSON( url, function(json) {
        managerJSON(json);
    });
}

function managerJSON(jsonFile){
    jsonFile.forEach(function(element){
        htmlConstructor(element);
    });
}

tags = ['All'];

function htmlConstructor(jsonButton){
    var button = '<a class="waves-effect waves-light btn" onClick="play(this)" data-button-tags="'+jsonButton.tags+'" data-button-name="'+jsonButton.text+'" data-sound-uri="'+jsonButton.uri+'" href="#">'+jsonButton.text+'</a>';
    $('#buttons-lib').append(button);

    index = tags.indexOf(jsonButton.tags);

    if(index === -1){
        tags.push(jsonButton.tags);

        var tag = '<a class="waves-effect waves-light btn" onclick="sortButton(this)" data-button-sort="'+jsonButton.tags+'">'+jsonButton.tags+'</a>';
        $('#tag-lib').append(tag);
    }

}

function play(button){
    var uri=button.attr('data-sound-uri');
    new Audio(uri).play();
}

function sort(button){
    console.log(button);
}
