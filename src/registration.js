let credentials = [];
$(document).ready(function(){
    alert("jquery loaded!");
    $("#signup").on("submit", function(e){
        e.preventDefault();
        getInfo();
    });
    $("#btnTeacher").on("click", function(){
        $("#btnStudent").prop("checked",false);
    });
    $("#btnStudent").on("click", function(){
        $("#btnTeacher").prop("checked",false);
    });
});
function getInfo(){
    
    /*console.log($("#username").val());
    console.log($("#password").val());
    console.log($("#confirm-password").val());
    console.log($("#email").val());
    console.log($("#confirm-email").val());*/

    credentials.push($("#username").val(),$("#password").val(),$("#confirm-password").val(),$("#email").val(),$("#confirm-email").val());
    if($("#btnTeacher").is(":checked") === true){
        credentials.push("teacher");
    }
    else if($("#btnStudent").is(":checked") === true){
        credentials.push("student");
    }
    console.log(credentials[0]);

    
}