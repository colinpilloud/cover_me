$(document).ready(function () {
    $(".js-define").each(function(index) {
        $(this).attr('id', "field-" + index);
        $(this).popover({
            "html": true,
            "placement": "bottom",
            "content": generateInputElement(index)
        });
    });

    $(".js-use").click(function() {
        window.location.href = "templates/" + $("select").val();
    });
});

function updateText(updatedText, id) {
    var updatedElementId = "#field-" + id.split("-")[1];
    $(updatedElementId).text(updatedText);
    $(updatedElementId).removeClass("highlighted");
    $(updatedElementId).popover('hide');
}

function generateInputElement(n) {
    return $("<input/>", { id: "input-" + n, type:"text", value:"", onchange:"updateText(this.value, this.id);" });
}

function showPreview(templateName) {
    $.get("templates/" + templateName, { "layout" : false }, function(data, status) {
        $('.js-preview').html(data);
        $(".js-use").show();enableButton();
    });
}
