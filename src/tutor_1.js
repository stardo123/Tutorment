$(document).ready(function(){
	$("#student").on("click", function(){
		alert("student!");
		window.location.href = "http://localhost/Tutorment/quiz.html";
	});
	$("#teacher").on("click", function(){
		alert("teacher!");
		window.location.href = "http://localhost/Tutorment/quizInput.html";
	});
});