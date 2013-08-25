function updateText(updatedText, id) {
    var index = id.split("-")[1];
    $("#field-" + index).text(updatedText);
    $("#field-" + index).removeClass("highlighted");
    $("#field-" + index).popover('hide');
}

function generateInputElement(n) {
    return $("<input/>", { id: "input-" + n, type:"text", value:"", onchange:"updateText(this.value, this.id);" });
}

$(document).ready(function () {
    $(".js-define").each(function(index) {
        $(this).attr('id', "field-" + index);
        $(this).popover({
            "html": true,
            "placement": "bottom",
            "content": generateInputElement(index)
        });
    });
});

function showPreview(templateName) {
    $.get("templates/" + templateName, { "layout" : false }, function(data, status) {
        $('.js-preview').html(data);
        $(".js-use").show();enableButton();
    });
}

$(document).ready(function() {
    $(".js-use").click(function() {
        window.location.href = "templates/" + $("select").val();
    });
});
