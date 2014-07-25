var express = require('express');
var bodyParser = require('body-parser');

var submissions = []

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/submit.html', function(req, res) {
	res.render('submit');
});

app.post('/submission', function(req, res){
	var submission = req.body;
	submission.url = function(){
		var id = submission.url.slice(submission.url.indexOf("=")+1)
		console.log("//www.youtube.com/embed/" + id)
		return "//www.youtube.com/embed/" + id
	}()
	if (submissions.length < 7) {
		submissions.push(submission)
		res.redirect('/')
	}
})

app.get('/view_submissions.html', function(req, res) {
	res.render('view_submissions', {
		submissions: submissions
	})
});

app.get('/api/submissions', function(req, res) {
		res.send({submissions: submissions})
});

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
