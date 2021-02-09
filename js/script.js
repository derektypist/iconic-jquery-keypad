$(document).ready(function() {

    // Set Up Global Variables
    let $display = $("#display");
    let iterations = 0;
    const ACTIVITIES = ["Music","Karaoke","Drawing","Dice","Calculator","Computing","Printing","Spreadsheet","Shapes","Coding","HTML","Python","Wine","Fish","Presentation","News","Information","Photo/Video"];
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

    // Keypad

    // Display Music when Music Icon is clicked
    $("#music").click(function() {
        displayActivity(ACTIVITIES[0]);
    });

    // Display Karaoke when Microphone Icon is clicked
    $("#karaoke").click(function() {
        displayActivity(ACTIVITIES[1]);
    });

    // Display Draawing when Draw Polygon Icon is clicked
    $("#drawing").click(function() {
        displayActivity(ACTIVITIES[2]);
    });

    // Display Dice when Dice Icon is clicked
    $("#dice").click(function() {
        displayActivity(ACTIVITIES[3]);
    });

    // Display Calculator when Calculator Icon is clicked
    $("#calculator").click(function() {
        displayActivity(ACTIVITIES[4]);
    });

    // Display Computing when Laptop Icon is clicked
    $("#computing").click(function() {
        displayActivity(ACTIVITIES[5]);
    })

    // Display Printing when Print Icon is clicked
    $("#printing").click(function() {
        displayActivity(ACTIVITIES[6]);
    });

    // Display Spreadsheet when Excel Icon is clicked
    $("#spreadsheet").click(function() {
        displayActivity(ACTIVITIES[7]);
    });

    // Display Shapes when Shapes Icon is clicked
    $("#shapes").click(function() {
        displayActivity(ACTIVITIES[8]);
    });

    // Display Coding when Code Icon is clicked
    $("#coding").click(function() {
        displayActivity(ACTIVITIES[9]);
    });

    // Display HTML when HTML icon is clicked
    $("#html").click(function() {
        displayActivity(ACTIVITIES[10]);
    });

    // Display Python when Python icon is clicked
    $("#python").click(function() {
        displayActivity(ACTIVITIES[11]);
    });

    // Display Wine when Wine Bottle icon is clicked
    $("#wine").click(function() {
        displayActivity(ACTIVITIES[12]);
    });

    // Display Fish when Fish icon is clicked
    $("#fish").click(function() {
        displayActivity(ACTIVITIES[13]);
    });

    // Display Presentation when Presentation icon is clicked
    $("#presentation").click(function() {
        displayActivity(ACTIVITIES[14]);
    });

    // Display News when Newspaper icon is clicked
    $("#news").click(function() {
        displayActivity(ACTIVITIES[15]);
    });

    // Display Information when Info icon is clicked
    $("#info").click(function() {
        displayActivity(ACTIVITIES[16]);
    });

    // Display Photo/Video when Photo/Video Icon is clicked
    $("#photovideo").click(function() {
        displayActivity(ACTIVITIES[17]);
    });

    // Set to Initial Default when Redo Icon is clicked
    $("#reset").click(resetActivity);

    // Change Background Color when Adjust Icon is clicked
    $("#settings").click(changeDisplayBackgroundColor);

    // Function to Change the Background Color of Display
    function changeDisplayBackgroundColor() {
        iterations++;
        $("#display").css("background-color", DISPLAY_BACKGROUND_COLORS[iterations % DISPLAY_BACKGROUND_COLORS.length]);
    }



});
