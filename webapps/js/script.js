var aes = require("../../node_modules/sttp/src/aes.js");

$(function(){
	$("#link").click(function (event) {
        console.log("clicked search btn");
        var text = $("#link_id").val();
        console.log(text);
        $.ajax({
            type: "GET",
            url: "/search",
            dataType: "text",
            data: {search_query: text},
            success: getSuccess,
            error: function (jqXHR, status, errorThrown) {
                console.log(status);
                console.log(jqXHR);
                console.log(errorThrown);
            }
    	});
    });
	console.log(aes.generateKey());
});