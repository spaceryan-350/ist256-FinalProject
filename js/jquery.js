$(document).ready(function(){


$("#search").on("click", function(){

if($("#search").val() == "Show"){

$("#").show();
$("#search").val("Hide");
}
else if($("#search").val() == "Hide"){

$("#").hide();
$("#search").val("Show");

}
});


});

