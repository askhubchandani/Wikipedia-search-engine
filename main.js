$(document).ready(function () {
    var userInput;
    $('#txt-input').keypress(function(event) {
       if(event.which == 13) {
           userInput = $('#txt-input').val();
           userInput = userInput.trim().replace(/\s+/g, '+');
           event.preventDefault();
           getAPI(userInput);
       } 
    });
    
    
});

function getAPI(userInput) {
    var entryPoint = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + userInput + "&limit=5";
    $.ajax({
        dataType: "jsonp",
        url: entryPoint,
        success: callback
    });
}

function callback(data) {
     $("#title1").text(data[1][0]);
     $("#title2").text(data[1][1]);
     $("#title3").text(data[1][2]);
     $("#title4").text(data[1][3]);
     $("#title5").text(data[1][4]);
     $("#des1").text(data[2][0]);
     $("#des2").text(data[2][1]);
     $("#des3").text(data[2][2]);
     $("#des4").text(data[2][3]);
     $("#des5").text(data[2][4]);
     $("#url1").text(data[3][0]);
     $("#url1").attr("href", data[3][0]);
     $("#url2").text(data[3][1]);
     $("#url2").attr("href", data[3][1]);
     $("#url3").text(data[3][2]);
     $("#url3").attr("href", data[3][2]);
     $("#url4").text(data[3][3]);
     $("#url4").attr("href", data[3][3]);
     $("#url5").text(data[3][4]);
     $("#url5").attr("href", data[3][4]);
     $(".result").css('background', 'rgba(300,300,300, .8)');
     $('form').css('top', '0px');
}
