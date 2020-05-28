$(function () {
    $("#dropdownmenu").blur(function(event) {
        if (window.innerWidth<768) {
        $('.collapse').collapse('toggle')
        }
    })
});
