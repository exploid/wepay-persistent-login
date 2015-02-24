setInterval(function() {
    confirm_button = document.querySelector("#autoLogoutDialog ~ .wepay-dialog-buttonbar .confirm")
    if (confirm_button) {
        confirm_button.click()
    }
}, 10000)
