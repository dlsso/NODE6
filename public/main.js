$(function(){

	$('#submit').on('click', function(e) {
		//if submissions.length<8
		console.log("submit was clicked")
		e.preventDefault()
		$('.error').removeClass('hidden')
	})

})