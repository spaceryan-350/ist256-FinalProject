$(document).ready(function(){

$("#ac_info").on("click", function(){
    $.ajax({
    url: "json/accessories.txt",
    dataType: "text",
    success: function(data){
    console.log(data);
    $("#accessories_info").text(data);
    }
});
});

$("#ab_info").on("click", function(){
    $.ajax({
    url: "json/about.txt",
    dataType: "text",
    success: function(data){
    console.log(data);
    $("#about_info").text(data);
    }
});
});


$("#c_info").on("click", function(){
    $.ajax({
    url: "json/console.txt",
    dataType: "text",
    success: function(data){
    console.log(data);
    $("#console_info").text(data);
    }
});
});


$("#l_info").on("click", function(){
    $.ajax({
    url: "json/laptop.txt",
    dataType: "text",
    success: function(data){
    console.log(data);
    $("#laptop_info").text(data);
    }
});
});


});

