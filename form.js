$('#post_google').submit(function (e) {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('input[name="available_days"]:checked');
    const radio = document.querySelectorAll('input[name="repair_type"]:checked');
    const instructionRadio = document.getElementById('set_instr');

    if (!instructionRadio.checked) {
        alert('請先閱讀並同意報修說明');
        e.preventDefault();
    } else if (checkboxes.length === 0 || radio.length === 0) {
        alert('請至少選擇一個在寢室的時間');
        e.preventDefault();
    } else {
        $.ajax({
            url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdZ4XuUXbXTrkKp13IOut1ONFDAq-ro_36pYhHOFtsYkhruJg/formResponse",
            crossDomain: true,
            data: {
            "entry.1615087205": $('#name').val(),
            "entry.1700077074": $('#student-class').val(),
            "entry.1560775534": $('#student-id').val(),
            "entry.1906499156": $('#room').val(),
            "entry.1232120604": $('#issue_category').val(),
            "entry.141166955": `${$('#ip1').val()}.${$('#ip2').val()}.${$('#ip3').val()}.${$('#ip4').val()}`,
            "entry.1936572459": $('#mac').val(),
            "entry.877816036": $('#issue').val(),
            "entry.1741606161": $('#table_num_select').val(),
            "entry.1207832043": $('#repair_type_hidden').val(),
            "entry.1083289908": $('#available_days_hidden').val()
            },
            type: "POST",
            dataType: "JSONP",
            complete: function () {
            $('#post_google').trigger('reset');
            window.location.replace("thank.html");
            }
        });
    }
});