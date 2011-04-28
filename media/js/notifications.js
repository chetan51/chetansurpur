$(function(){
	current_notification_version = 1; // set to 0 to disable
	
	if (current_notification_version &&
		current_notification_version > localStorage.getItem('chetansurpur_notification')) {
		$("#site").css("margin-top", parseInt($("#site").css("margin-top").replace("px", "")) + $("#notifications").height());
		$("#notifications").slideDown();
	}
		
	$("#notifications .close").click(function() {
		$("#notifications").slideUp();
		$("#site").css("margin-top", parseInt($("#site").css("margin-top").replace("px", "")) - $("#notifications").height());
		localStorage.setItem('chetansurpur_notification', current_notification_version);
	});
});
