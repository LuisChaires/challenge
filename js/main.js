//$( document ).ready(function() {});
var imageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/';
var apikey = '4ed5315f6fea454c877d83e1ee80d751';

$(document).on('click' , '.card-recipe', function(){
  	let id = $(this).attr('id');
  	let url = 'https://api.spoonacular.com/recipes/'
  			  + id +'/ingredientWidget.json?apiKey=' + apikey;
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
	  	let url = '/recipes/api/Hello.php'
	  	var ip = self.location.host;
	  	console.log(ip);
	  	$.get(url, function( data ) {
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
		let url = 'https://api.spoonacular.com/recipes/complexSearch?query='
		+ query + '&number=100&limitLicence=true&apiKey=' + apikey;

		$.get(url, function( data ) {
			console.log(data);
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