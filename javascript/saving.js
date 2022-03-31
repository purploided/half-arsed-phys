// this is for saving in local storage

electron = document.getElementById('electron');

document.getElementById('saveButton').addEventListener('click', function(event) { // when the input changes

    let shiftX = event.clientX - electron.getBoundingClientRect()
        .left;
    let shiftY = event.clientY - electron.getBoundingClientRect()
        .top;

    localStorage.setItem('electronState', shiftX); // save the value of the input
    localStorage.setItem('electronState2', shiftY); // save the value of the input
    alert("Click 'OK' to confirm this save.");
});

/*
     _________________________________________________
    /                                                 \
    |            HOW TO SAVE                           |
    |                                                  |   
    |  Click the "Save Button" to save your state      |
    |  Click the "Load Button" to then load your state |
    |  Repeat this again once                          |
    |                                                  |
    |                                                  |
    |  Have fun!                                       |
    \__________________________________________________/
*/

document.getElementById('loadButton').addEventListener('click', function(event) { // this code is crap, but it works

    let shiftX = event.clientX - electron.getBoundingClientRect()
        .left;
    let shiftY = event.clientY - electron.getBoundingClientRect()
        .top;

    let stateGrab1 = localStorage.getItem('electronState');
    let stateGrab2 = localStorage.getItem('electronState2');

    if (stateGrab1, stateGrab2) { // if there are states, then
        electron.style.left = stateGrab1;
        electron.style.top = stateGrab2;
    }
});