$(function(){
    var jsonPath = "http://sampbox.thomas-merel.fr/src/config/buttons.json?jsoncallback=?";
    readJson(jsonPath);
});


function readJson(path){
    $.getJSON(path, function(json) {
        readData(jsonObject);
    });
}

function readData(data){
    jsonObject = JSON.parse(data);
    console.log(jsonObject);
}
