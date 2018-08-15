// (function () {

//     $("#window-dropdown").change(function () {
//         console.log(this);
//         process($(this).children(":selected").html());
//     });


//     let saveConfiguratorState = function () {

//     }

// }());
var globalConfig = {
    '1w': 'assets/icons/1w.png'
}

$(document).ready(function () {
    $("#window-dropdown").change(function () {
        let selectedChoice = $(this).children(":selected").val();
        let windowList = $("#window-list");
        if (selectedChoice === "doors") {

        } else if (selectedChoice === "windows") {

        }
    });

    $("input[name='windows-group']").change(function () {
        showWindow($(this).val());
    });

    $("input[name='doors-group']").change(function () {
        let selectedChoice = $(this).children(":selected").val();
        console.log(selectedChoice);

    });

    var showWindow = function (selectedWindow) {
        console.log(selectedWindow);
        $("#configured-container").append($("#template").render());
    }
});