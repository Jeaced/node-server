var express = require("express");
var app = express();
var searching = require("searching");
var browserify = require("browserify");
var DataPacker = require("sttp").DataPacker;

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

var aesKey = "0000111144442222";

app.get("/search", function (req, res) {
	var query = req.query["search_query"];
	var sttpUsed = req.query["sttp_used"] == "true";

	var data = searching.word(query, 250, "data.txt", "./", function(data) {
		if (sttpUsed) {
			var packer = new DataPacker(aesKey);
			data = packer.pack(data);
		}
		res.send(data);
	});
});


app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});