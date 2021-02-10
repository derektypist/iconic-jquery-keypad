# Iconic jQuery Keypad

The purpose of the project is to provide an Iconic Keypad, using the Font Awesome Icons and the Technology of jQuery.

## UX

The aim is to provide a keypad with the Font Awesome Icons for various activities, such as Computing, Music and News.

As a user, when I hover over the buttons, I expect a tooltip to be displayed.

As a user, when I click on a button with the `Redo Icon`, I expect the message `Select Activity` to be displayed.  The background color stays the same.

As a user, when I click on the button with an icon, I expect the name of the activity (e.g. `Python`) to be displayed.  Except on buttons with the `Redo` and `Adjust` icons.

As a user, when I click on a button with the `Adjust Icon`, I get a different background color.  The background colors run from seagreen, blue, purple,orangered, olive, brown, deeppink and cornflowerblue.  When the button with the `Adjust Icon` is clicked and the background color is `cornflowerblue`, the background color goes back to `seagreen`.  However, the message or activity on the display is the same.

As a user, when I hover over the buttons, I get a different background color.

**Information Architecture**

Activities are in a string array.
The activities are:

    Music, Karaoke, Drawing, Dice, Calculator, Computing, Printing, Spreadsheet,
    Shapes, Coding, HTML, Python, Wine, Fish, Presentation, News,
    Information and Photo/Video.

The background colors are:

    seagreen, blue, purple, orangered, olive, brown, deeppink and cornflowerblue.

Every 

