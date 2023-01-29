$(document).ready(function(){
	$(".pictures").on("click",function(){
		$("#heading").toggle();
		$(".pictures").not(this).toggle();
		$("."+this.id).toggle();
		$("#"+this.id+"_video").trigger("pause");
	});
});