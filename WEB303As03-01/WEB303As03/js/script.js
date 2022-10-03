$(function(){
    getJsonData();
});

function getJsonData(){
    $.getJSON("team.json", (result)=>{
        $.each(result, (index, data)=>{
            $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
        });
    });
};

