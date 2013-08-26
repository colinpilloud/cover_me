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
    // given the id, find the title that matches
    var updatedElementId = "#field-" + id.split("-")[1];
    var titleToUpdate = $(updatedElementId).attr("data-original-title");

    $('.js-define[data-original-title="' + titleToUpdate + '"]').each(function() {
        $(this).text(updatedText);
        $(this).removeClass("highlighted");
        $(this).popover('hide');
    });
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
