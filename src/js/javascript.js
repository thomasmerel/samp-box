$(function(){
        
    var jsonURL = 'http://sampbox.thomas-merel.fr/src/config/buttons.json'
    console.log(jsonURL);
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
    var button = '<a class="waves-effect waves-light btn soundButton" onClick="play(this)" data-button-tags="'+jsonButton.tag+'" data-button-name="'+jsonButton.text+'" data-sound-uri="'+jsonButton.uri+'" href="#">'+jsonButton.text+'</a>';
    $('#buttons-lib').append(button);

    index = tags.indexOf(jsonButton.tag);

    if(index === -1){
        tags.push(jsonButton.tag);

        var tag = '<a class="waves-effect waves-light btn tagButton" onclick="sortButton(this)" data-button-sort="'+jsonButton.tag+'">'+jsonButton.tag+'</a>';
        $('#tag-lib').append(tag);
    }

}

function play(button){
    var uri=button.attr('data-sound-uri');
    new Audio(uri).play();
}

function sortButton(button){
    if(button.attr('data-button-sort') === 'All'){
        $('.soundButton').show();
    }else{
        $('.soundButton').hide()
        $('.soundButton[data-button-tags="'+button.attr('data-button-sort')+'"]');
    }
}
