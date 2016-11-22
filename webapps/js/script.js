var aes = require("../../node_modules/sttp/src/aes.js");
var DataPacker = require("sttp").DataPacker;
var aesKey = "0000111144442222";

$(function(){
	$("#link").click(function (event) {
        console.log("clicked search btn");
        var text = $("#query").val();
        var useSTTP = $("#sttp_used").is(":checked");
        console.log(text);
        $.ajax({
            type: "GET",
            url: "/search",
            dataType: "text",
            data: {search_query: text, sttp_used: useSTTP},
            success: onSuccess,
            error: function (jqXHR, status, errorThrown) {
                console.log(status);
                console.log(jqXHR);
                console.log(errorThrown);
            }
    	});
    });

    function onSuccess(data, status) {
        var useSTTP = $("#sttp_used").is(":checked");
        console.log(useSTTP);
        if (useSTTP) {
    		var packer = new DataPacker(aesKey);
    		data = packer.unpack(data);
    	}
    	getSuccess(data, status);
    }
	console.log(aes.generateKey());
});