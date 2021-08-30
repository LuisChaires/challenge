$(document).on('click' , '.card-recipe', function(){
  	let id = $(this).attr('id');
  	let url = apiurls.SPOONACULAR.value 
  			  + id 
  			  +'/ingredientWidget.json?apiKey='
  			  + apiurls.APIKEY.value;
  	var myModal = new bootstrap.Modal($('#ingredientsModal'), {
					  keyboard: false
					});

  	$.get(url, function( data ) {
		$("#bodyIngredients").empty();
		$("#ingredientsBodyJson").empty();

		$( "#ingredientsBodyJson" )
				.append('<p>Requested url: '+ url +'<p>'
					    + '<pre>'+ JSON.stringify(data, null, " ") +'</pre>');
		$.each( data.ingredients, function( key, value ) {
		$("#bodyIngredients")
			.append('<tr>'
					+ ' <td><img src="'+ imageUrl + value.image +'" class="cimg-thumbnail" alt="..."></td>'
					+ ' <td>'+ value.name +'</td>'
					+ ' <td>'+ value.amount.metric.value + ' ' + value.amount.metric.unit +'</td>'
					+ '</tr>');
		});
	});

	myModal.show();
});

$(document).on('keypress' , '#searchInput', function(event){
	let query = $("#searchInput").val();

	if(event.which === 13 && query){
		call();
	}
});

function hello(){
  	let url = apiurls.HELLO_API.value;
  	var ip = self.location.host;

  	$.post(url, {action: 'hello', apikey: apiurls.APIKEY.value}, function( data ) {
  		let info = JSON.parse(data);
		$("#helloBodyModal").empty();

		$( "#helloBodyModal" )
				.append('<p><b>Requested url:</b> '+ ip + url +'<p>'
					    + '<p><b>Json:</b> </p><pre>'+ JSON.stringify(info, null, " ") +'</pre>'
						+ '<p><b>Message:</b> '+ info.message +'</p>');

	});
}

function call() {
	let query = $("#searchInput").val();

	if(query){
		let url = apiurls.SPOONACULAR.value 
				  +'complexSearch?query='
				  + query 
				  + '&number=100&limitLicence=true&apiKey=' 
				  + apiurls.APIKEY.value;

		$.get(url, function( data ) {
			$( "#recipe-container" ).empty();
			$( "#recipeBodyJson" ).empty();

			$('#modalBtn').remove();

			$(".btn-card-body")
			.append('<button id="modalBtn" type="button" class="btn btn-primary json-btn" data-bs-toggle="modal" data-bs-target="#jsonModal">'
      		        + '	Recipes Json'
                    + '</button>');

			$( "#recipeBodyJson" )
				.append('<p>Requested url: '+ url +'<p>'
					    + '<pre>'+ JSON.stringify(data, null, " ") +'</pre>');

			$.each( data.results, function( key, value ) {
				$( "#recipe-container" )
				.append('<div id="'+ value.id +'" class="card card-recipe" style="width: 18rem;">'
  						+ '	<img src="'+ value.image +'" class="card-img-top" alt="...">'
  					    + '	<div class="card-body">'
    					+ '		<h5 class="card-title">'+ value.title +'</h5>'
  						+ '	</div>'
						+ '</div>');
			});
		}); 
	}
};