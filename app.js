var express = require("express");
var app = express();
var searching = require("searching");
var browserify = require("browserify");

app.get("/bundle.js", function(req, res) {
    res.setHeader('content-type', 'application/javascript');
    var b = browserify(__dirname + '/webapps/js/script.js').bundle();
    b.on('error', console.error);
    b.pipe(res);
});

app.use("/public", express.static(__dirname + "/webapps"));

app.get("/", function (req, res) {
	//res.sendFile(path.join(__dirname, 'index.html'));
	res.sendfile("webapps/view/index.html")
});

app.get("/search", function (req, res) {
	var query = req.query["search_query"];
	var data = searching.word(query, 250, "data.txt", "./", function(data) {
		res.send(data);
	});
});


app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});