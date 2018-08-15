// (function () {

// }());

var globalConfig = {
    '1w': 'assets/icons/1w.png'
}

$(document).ready(function () {
    var windowList = $("#windows-list");
    var doorsList = $("#doors-list");
    var windowsListFirst = $("#windows-list input[value='1w']");
    var doorsListFirst = $("#doors-list input[value='1d']");

    $(windowsListFirst).prop("checked", true);
    $(doorsList).hide();

    $("#window-dropdown").change(function () {
        let selectedChoice = $(this).children(":selected").val();

        if (selectedChoice === "doors") {
            $(windowList).hide();
            $(doorsList).show();
            $(doorsListFirst).prop("checked", true);
        } else if (selectedChoice === "windows") {
            $(doorsList).hide();
            $(windowList).show();
            $(windowsListFirst).prop("checked", true);
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
        $("#configured-container").append('<img src="assets/images/windows/central.png" alt="central" />');
    }

    var getFormValues = function () {

    }
});