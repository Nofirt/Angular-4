$(document).ready(function () {
    // App initialization
    var windowList = $("#windows-list");
    var doorsList = $("#doors-list");
    var windowsListFirst = $("#windows-list input[value='1w']");
    var doorsListFirst = $("#doors-list input[value='1d']");

    $(windowsListFirst).prop("checked", true);
    $(doorsList).hide();
    showWindow('1w');

    // Events
    $("#window-dropdown").change(function () {
        let selectedChoice = $(this).children(":selected").val();

        if (selectedChoice === "windows") {
            $(doorsList).hide();
            $(windowList).show();
            $(windowsListFirst).prop("checked", true);
            showWindow('1w');
        } else if (selectedChoice === "doors") {
            $(windowList).hide();
            $(doorsList).show();
            $(doorsListFirst).prop("checked", true);
            showDoor('1d');
        }
    });

    $("input[name='windows-group']").change(function () {
        let radioGroup = $("input[name='windows-group']");
        radioGroup.splice(0, 4).forEach(r => {
            if ($(r.parentElement).hasClass("current")) {
                $(r.parentElement).removeClass("current")
            }
        });
        $(this.parentElement).addClass("current");
        showWindow($(this).val());
    });

    $("input[name='doors-group']").change(function () {
        let radioGroup = $("input[name='doors-group']");
        radioGroup.splice(0, 3).forEach(r => {
            if ($(r.parentElement).hasClass("current")) {
                $(r.parentElement).removeClass("current")
            }
        });
        $(this.parentElement).addClass("current");
        showDoor($(this).val());
    });

    // Get values from form
    $("button").click(function () {
        getFormValues();
    });

    // Swaping the window in case it's one or in middle
    $("#configured").on("click", ".middle", function () {
        switch (this.name) {
            case "central":
                this.src = "assets/images/windows/right.png";
                this.name = "right";
                break;
            case "right":
                this.src = "assets/images/windows/right-up.png";
                this.name = "right-up";
                break;
            case "right-up":
                this.src = "assets/images/windows/left.png";
                this.name = "left";
                break;
            case "left":
                this.src = "assets/images/windows/left-up.png";
                this.name = "left-up";
                break;
            default:
                this.src = "assets/images/windows/central.png";
                this.name = "central";
                break;
        }
    });

    // Swaping the left window
    $("#configured").on("click", ".left", function () {
        switch (this.name) {
            case "central":
                this.src = "assets/images/windows/left.png";
                this.name = "left";
                break;
            case "left":
                this.src = "assets/images/windows/left-up.png";
                this.name = "left-up";
                break;
            default:
                this.src = "assets/images/windows/central.png";
                this.name = "central";
                break;
        }
    });

    // Swaping the right window
    $("#configured").on("click", ".right", function () {
        switch (this.name) {
            case "central":
                this.src = "assets/images/windows/right.png";
                this.name = "right";
                break;
            case "right":
                this.src = "assets/images/windows/right-up.png";
                this.name = "right-up";
                break;
            default:
                this.src = "assets/images/windows/central.png";
                this.name = "central";
                break;
        }
    });

    // Swaping the door
    $("#configured").on("click", ".door-left", function () {
        debugger
        switch (this.name) {
            case "door-left":
                this.src = "assets/images/doors/door-lu.png";
                this.name = "door-left-up";
                break;
            default:
                this.src = "assets/images/doors/door-l.png";
                this.name = "door-left";
                break;
        }
    });

    // Functions
    function showWindow(selectedWindow) {
        if (selectedWindow === '1w') {
            $("#configured img").remove();
            $("#configured").append('<img class="middle" name="central" src="assets/images/windows/central.png" />');

        } else if (selectedWindow === '2w') {
            $("#configured img").remove();
            $("#configured").append('<img class="left" name="central" src="assets/images/windows/central.png" /><img class="right" name="central" src="assets/images/windows/central.png" />');

        } else if (selectedWindow === '3w') {
            $("#configured img").remove();
            $("#configured").append('<img class="left" name="central" src="assets/images/windows/central.png" /><img class="middle" name="central" src="assets/images/windows/central.png" /><img name="central" class="right" src="assets/images/windows/central.png" />');

        } else if (selectedWindow === '4w') {
            $("#configured img").remove();
            $("#configured").append('<img name="central" class="left" src="assets/images/windows/central.png" /><img name="central" src="assets/images/windows/central.png" class="middle" /><img name="central" src="assets/images/windows/central.png" class="middle" /><img name="central" class="right" src="assets/images/windows/central.png" />');
        }
    }

    function showDoor(selectedDoor) {
        if (selectedDoor === '1d') {
            $("#configured img").remove();
            $("#configured").append('<img class="door-left" name="door-left" src="assets/images/doors/door-l.png" />');
        } else if (selectedDoor === '1w1d') {
            $("#configured img").remove();
            $("#configured").append('<img class="left" name="central" src="assets/images/windows/central.png" /><img name="door-left" class="door-left" src="assets/images/doors/door-l.png" />');
        } else if (selectedDoor === '2w1d') {
            $("#configured img").remove();
            $("#configured").append('<img class="left" name="central" src="assets/images/windows/central.png" /><img class="middle" name="central" src="assets/images/windows/central.png" /><img name="door-left" class="door-left" src="assets/images/doors/door-l.png" />');
        }
    }

    function getFormValues() {
        let dropdownCoice = $("#window-dropdown").val();
        let data = $("form").serializeArray();
        data.push({
            name: 'type of windows',
            value: $("input[name='" + dropdownCoice + "-group']:checked").val()
        })
        JSON.stringify(data);
        $.ajax({
            url: "script.php",
            method: "POST",
            contentType: "application/json",
            data: data,
            dataType: "JSON",
            crossDomain: true,
            success: (msg) => {
                alert(msg)
            },
            error: (jqXHR, status) => {
                console.log(jqXHR, status);
            }
        })
    }
});