$(function(){

	$('#submit-btn').on('click', function(e) {
		e.preventDefault()

		$.get('/api/submissions', function(data) {
			console.log("clicked")
			var submissions = data.submissions
			if(submissions.length>7){
				$('.error').removeClass('hidden')
				console.log("if hit")
			}
			else{
				$('#entry-form').submit()
			}
		})
	})
})