$(function(){
    getJsonData();
});

const team = $("div#team");

function getJsonData(){
    $.getJSON("team.json", (result)=>{
        $.each(result, (index, data)=>{
            team.append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
        });
    });
};