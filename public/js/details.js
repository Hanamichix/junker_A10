/*
 * Make an AJAX call to retrieve project details and add it in
 */

function addItemDetails(id) {
	// Prevent following the link
//	e.preventDefault();

	// Get the div ID, e.g., "project3"
	console.log($(this).closest('.matches'));
	var itemID = id;
	console.log(itemID);
	// get rid of 'project' from the front of the id 'project3'

	console.log("User clicked on item " + itemID);
	$.get("/match/" + itemID, callBack);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function callBack(result){
	console.log(result);
	var itemID = result['itemid'];
	console.log(itemID);
	var obj = document.getElementById("add");
	console.log(obj);
	if (obj){
		console.log("toggle");
  		$("#add").toggle();
  		return;
	}
	var itemHTML = '<a href = "#" class = "thumbnail" id = "add">' + '<img src= "' + result['imageURL'] + '" class = "detailsImage">' + 
	'<p>' + 'Name:  ' + result['name'] + '</p>' +
	'<p>' + 'Ownername:  ' + result['ownername'] + '</p>' +
	'<p>' + 'Bio:  ' + result['bio'] + '</p>' +
	'<p>' + 'Email:  ' + result['email'] + '</p>' +
	'<p>' + 'Phone:  ' + result['phone'] + '</p>' +
	'<p>' + 'Facebook:  ' + result['facebook'] + '</p>' +
	'<p>' + 'Description:  ' + result['description'] + '</p></a>';
	$("#" + itemID + " .details").html(itemHTML);

}