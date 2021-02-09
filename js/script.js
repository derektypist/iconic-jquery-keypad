$(document).ready(function() {

    // Set Up Global Variables
    let $display = $("#display");
    let iterations = 0;
    const DISPLAY_BACKGROUND_COLORS = ["seagreen","blue","purple","orangered","olive","brown","deeppink","cornflowerblue"];
    const MESSAGE = "Select Activity";

    resetActivity();

    // Function to Reset Activity
    function resetActivity() {
        displayActivity(MESSAGE);
    }

    // Function to Display Activity
    function displayActivity(name) {
        $("#display").html(`<p>${name}</p>`);
    }


});
