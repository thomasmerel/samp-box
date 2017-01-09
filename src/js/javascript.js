$(function(){
    var jsonPath = "src/config/buttons.json";
    readJson(jsonPath);
});


function readJson(path){
    $.getJSON(path, function(json) {
            console.log(json);
    });
}

function readData(data){
    console.log(data);
}
