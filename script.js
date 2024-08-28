document.getElementById('popup-open').addEventListener('click', function() {
    document.getElementById('popup-window').classList.add('popup-visible');
});

document.getElementById('popup-window').addEventListener('click', function(event) {
    if (event.target === this) {
        document.getElementById('popup-window').classList.remove('popup-visible');
    }
});


function validateForm() {
    var selectElement = document.querySelector('#store');    
  
    if (selectElement.disabled) {
        alert("請選擇項目");
        return false;
    }
    return true;
}

document.querySelector('form').addEventListener('submit', function(event) {
    const ip1 = document.getElementById('ip1').value;
    const ip2 = document.getElementById('ip2').value;
    const ip3 = document.getElementById('ip3').value;
    const ip4 = document.getElementById('ip4').value;

    const fullIp = `${ip1}.${ip2}.${ip3}.${ip4}`;
    document.getElementById('ip').value = fullIp;
});

document.getElementById('room').addEventListener('input', function() {
    const roomNum = parseInt(this.value, 10);

    if (roomNum >= 101 && roomNum <= 133) {
        document.getElementById('ip3').value = 24;
    } else if (roomNum >= 201 && roomNum <= 233) {
        document.getElementById('ip3').value = 25;
    } else if (roomNum >= 301 && roomNum <= 333) {
        document.getElementById('ip3').value = 26;
    } else if (roomNum >= 401 && roomNum <= 433) {
        document.getElementById('ip3').value = 27;
    } else if (roomNum >= 151 && roomNum <= 183) {
        document.getElementById('ip3').value = 28;
    } else if (roomNum >= 251 && roomNum <= 283) {
        document.getElementById('ip3').value = 29;
    } else if (roomNum >= 351 && roomNum <= 383) {
        document.getElementById('ip3').value = 30;
    } else if (roomNum >= 451 && roomNum <= 483) {
        document.getElementById('ip3').value = 31;
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    const selectedRepairType = document.querySelector('input[name="repair_type"]:checked').value;
    document.getElementById('repair_type_hidden').value = selectedRepairType;
});

document.getElementById('post_google').addEventListener('submit', function(event) {
    const checkboxes = document.querySelectorAll('input[name="available_days"]:checked');

    const selectedDays = Array.from(checkboxes).map(checkbox => checkbox.value).join(', ');
    document.getElementById('available_days_hidden').value = selectedDays;
});

document.getElementById('issue_category').addEventListener('change', function() {
    const selectedOption = this.value;
    const ipFields = document.querySelectorAll('.ip-segment');
    const macField = document.getElementById('mac');
    const repair = document.querySelector('input[name="repair_type"]');

    if (selectedOption === '網路孔損壞') {
        ipFields.forEach(field => field.required = false);
        repair.forEach(field => field.required = false);
        macField.required = false;
    } else {
        ipFields.forEach(field => field.required = true);
        repair.forEach(field => field.required = true)
        macField.required = true;
    }
});