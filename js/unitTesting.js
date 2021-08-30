

function testing(){
	$("#testingBodyModal").empty();
  	let url1 = apiurls.HELLO_API.value;
  	var ip = self.location.host;

  	$.post(url1, {action: 'hello', apikey: apiurls.APIKEY.value}, function( data ) {
  		let info = JSON.parse(data);
		$("#testingBodyModal")
			.append('<div class="card card-custom" style="border: 5px solid green">'
                    + '<div class="card-body btn-card-body">'
					+ '<p><b>Requested url:</b> '+ ip + url1 +'<p>'
				    + '<p><b>Json:</b> </p><pre>'+ JSON.stringify(info, null, " ") +'</pre>'
					+ '<p><b>Message:</b> '+ info.message +'</p>'
					+ '</div>'
					+ '</div>');
	});

	let url2 = apiurls.HELLO_API.value
		+ '?action=bye&apikey='
		+ apiurls.APIKEY.value;

  	$.get(url2, function( data ) {
	}).fail(function(data) {
	    $("#testingBodyModal")
			.append('<div class="card card-custom" style="border: 5px solid red">'
                    + '<div class="card-body btn-card-body">'
					+ '<p><b>Requested url:</b> '+ ip + url2 +'<p>'
				    + '<p><b>Json:</b> </p><pre>'+ JSON.stringify(data, null, " ") +'</pre>'
					+ '</div>'
					+ '</div>');
	});

	let url3 = apiurls.HELLO_API.value
		+ '?action=hello';

	$.post(url3, function( data ) {
	}).fail(function(data) {
		
	    $("#testingBodyModal")
			.append('<div class="card card-custom" style="border: 5px solid red">'
                    + '<div class="card-body btn-card-body">'
					+ '<p><b>Requested url:</b> '+ ip + url3 +'<p>'
				    + '<p><b>Json:</b> </p><pre>'+ JSON.stringify(data, null, " ") +'</pre>'
					+ '</div>'
					+ '</div>');
	});

	testSpoonacular();
}

function testSpoonacular(){
	let url = apiurls.SPOONACULAR.value 
			  +'complexSearch?query='
			  + 'pasta' 
			  + '&number=1&limitLicence=true&apiKey=' 
			  + apiurls.APIKEY.value;

	$.get(url, function( data ) {
		$("#testingBodyModal")
			.append('<div class="card card-custom" style="border: 5px solid green">'
                    + '<div class="card-body btn-card-body">'
					+ '<p><b>Requested url:</b> '+ url +'<p>'
				    + '<p><b>Json:</b> </p><pre>'+ JSON.stringify(data, null, " ")  +'</pre>'
					+ '</div>'
					+ '</div>');
	});

	url = apiurls.SPOONACULAR.value 
	  +'complexSearch?query='
	  + 'pasta' 
	  + '&number=1&limitLicence=true';

	$.get(url, function( data ) {
		
	}).fail(function(data) {
	   $("#testingBodyModal")
			.append('<div class="card card-custom" style="border: 5px solid red">'
                    + '<div class="card-body btn-card-body">'
					+ '<p><b>Requested url:</b> '+ url +'<p>'
				    + '<p><b>Json:</b> </p><pre>'+ JSON.stringify(data, null, " ")  +'</pre>'
				    + '<p><b>Message:</b> '+ data.message +'</p>'
					+ '</div>'
					+ '</div>');
	});

}