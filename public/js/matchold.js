$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#matchold").click(dealClick);


}

function dealClick() {
	console.log("iiiiii");
	ga("send", "event", 'deal', 'click');
	window.location.href = 'index';



}
