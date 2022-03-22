// Create to do
$('.create').click(function () {
	$('input[name=todo-list]').val();
	if (($('input[name=todo-list]').val()) === "") return;
	$("ul").prepend("<li><span class='left'><i class='fa fa-trash'></i></span> <span class='text'> " + $('input[name=todo-list]').val() + " </span><span class='right'><i class='fa fa-pencil'></li>");
	$(".error").css("display", "none");
	$("#clear").css("display", "block");
	$('input[name=todo-list]').val("");
});
$("input[name=todo-list]").keyup(function (event) {
	if (event.keyCode == 13) {
		$(".create").click();
	}
});

// Edit to do 
$("ul").on("click", "span.right", function (event) {
	var parent = $(this).parent();
	var oldVal = parent.text();
	parent.html("<input type='text' class='editinput'>");
	$(".editinput").keypress(function (e) {
		if (e.which === 13) {
			if ($(this).val() === "") {
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'> " + oldVal + " </span><span class='right'><i class='fa fa-pencil'>");
			}
			else {
				var newVal = $(this).val();
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'> " + newVal + " </span><span class='right'><i class='fa fa-pencil'>");
			}
		}
		e.stopPropagation();
	});
	event.stopPropagation();
});

// Make as done
$("ul").on("click", "span.text", function (event) {
	$(this).toggleClass("completed");
});

// Delete to do
$("ul").on("click", "span.left", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
		alert("The task was deleted.");
	});
	event.stopPropagation();
});

// Delete all to do 
$("#clear").on("click", function (event) {
	$("li").fadeOut(500, function () {
		$("li").remove();
		$(".error").css("display", "block");
		$("#clear").css("display", "none");
	});
	event.stopPropagation();
});
