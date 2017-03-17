
'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {

	console.log("Javascript connected!");
	$("#success-alert").hide();
	$("#dislike").click(dislikeClick);
	$("#myCarousel").carousel({interval: false, wrap: false});
	//$("#myCarousel").carousel('next');
	//The dummy user id is 1
	//$.get("browse/browselist/" + 1, generatePop);
	$("#myCarousel").carousel(1);
	$("#myCarousel").on('slid.bs.carousel', function () {
		$("#like").popover("hide");
		$("#like").popover("destroy");
		console.log("popover destroy");
		$.get("browse/browselist/" + 1, generatePop);
    });


}


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);


function dislikeClick(e) {
	console.log("Dislike!");
	$("#myCarousel").carousel('next');
	e.preventDefault();
	//loadInfo();
}

function itemClick(e) {

	console.log(e);
	console.log("Clicked!");
	var modal = document.getElementById('myModal');

// Get the button that opens the modal

// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 

// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
    	modal.style.display = "none";
	}

// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
    	}
	}
	var header = document.getElementById("modalHeading");
	if (e.length == 4) 
	{
		header.innerHTML = "New match"
		var content = document.getElementById("modalContent");
		content.innerHTML = "Your " + e[1] + " and " + e[2] + "'s " + e[3] + ".\nYou could <a href = \"match\">check " + e[2] + "'s contact information! </a>" 
		modal.style.display = "block";
	}
	else {
$("#success-alert").fadeTo(1000, 300).slideUp(300, function(){
    $("#success-alert").slideUp(500);
});
		//alert('Your preference is recorded. You will be notified should someone also like your item!');

	}
}

function generatePop(items) {

	var str = '';
	for (var i = 0; i < items.length; i++) {
		var name = items[i].name;
		var url = items[i].imageURL;
		var thisid = $("");
		//var str1 = '<div class = "list-group" id = ' + '"' + items[i].itemid + '"><a href = "browse/' + items[i].itemid + '&' + $('item active').attr('id') +'" class="list-group-item">'+name+ '<img src="' + url + '" class="img-responsive" width="80" height="80"></a>';
		var str1 = '<div class = "list-group" id = ' + '"' + items[i].itemid + '" onClick = "listFunction(this)"><class="list-group-item">'+name+ '<span><img src="' + url + '" class="img-responsive" width="80" height="80"></span></div>';
		str = str.concat(str1);
		console.log("BAD!!!!");
	}
	console.log(str);
    $("#like").popover(
		{
    		trigger:"hover",    //如果设为focus 当按钮失去焦点提示层会消失，例如页面空白处单机提示层消失
    		placement:"top",
    		html:true,
    		content:str
    		//content:"What the Fuck!!!"
		}
    );   
    
}

function listFunction(clicked) {
	$('[data-toggle="tooltip"]').tooltip();
	var itemid = clicked.id;
	console.log(itemid);
	var thisid = document.getElementsByClassName("item active")[0].id;
	console.log(thisid);
	$.get('browse/' + itemid + "&" + thisid, itemClick);
	$("#myCarousel").carousel('next');
	$('[data-toggle="tooltip"]').tooltip("destroy");

}







