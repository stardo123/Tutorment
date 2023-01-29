$(document).ready(function(){
	$("#student").on("click", function(){
		alert("student!");
		window.location.href = "http://localhost/MyFirstWebsite/quiz.html";
	});
	$("#teacher").on("click", function(){
		alert("teacher!");
		window.location.href = "http://localhost/MyFirstWebsite/quizInput.html";
	});
});