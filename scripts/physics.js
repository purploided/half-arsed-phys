/*
    This is an electron app about physics that Glowsik_ on discord recommended me to create
    all the code written within this script is commented to a tea
    you can also comment/uncomment the other blocks to get some sort of chaotic version of the physics
*/

let clsn = false
let orbt = false
let crash = false

var electron = document.getElementById("electronfade");

/*
    Drag Physics
*/

electron.onmousedown = function(event) { // starts the event

    let shiftX = event.clientX - electron.getBoundingClientRect()
        .left;
    let shiftY = event.clientY - electron.getBoundingClientRect()
        .top;
    electron.style.position="absolute";
    electron.style.transition = "2ms linear";
    electron.style.zIndex=1000;
    document.body.append(electron);
    moveAt(event.pageX, event.pageY);

    setTimeout(() => {  console.warn(`The "electron" is at ${shiftX}, ${shiftY}`);}, 1000); // gathers the X and Y position of the "electron" 

    /* 
        move the "electron" along the X & Y axis
        basically remembering the inital position
    */
    function moveAt(pageX, pageY) {
        electron.style.left = `${pageX - shiftX}px`; // (chaos code) electron.style.left = `${pageX - shiftX}%`;
        electron.style.top = `${pageY - shiftY}px`; // (chaos code) electron.style.top = `${pageY - shiftY}%`;
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    // moving the "electron" to the specifics of the mouse
    document.addEventListener('mousemove', onMouseMove);
    // stops the movement putting the "electron" in exact spot of the mouse
    electron.onmouseup = function() {

        /*
            the code below is just for testing scenarios where the "electron" is above a limit
            this needs some great fixes, but it works perfectly for now
        */

        if (electron.style.top >= "700px") { // if the "electron" is equal to or greater than 700px
            document.removeEventListener('mousemove', onMouseMove);
            electron.onmouseup = document.getElementById("electronfade").style.top = "993px";
            electron.onmouseup = document.getElementById("electronfade").style.transition = "302ms linear";

            setTimeout(() => {  document.getElementById("electronfade").style.top = "970px"; }, 302.3);
            setTimeout(() => { document.getElementById("electronfade").style.top = "993px"; }, 602.8);

            if (orbt == true) {
                orbitPhysics();
            }
            if (clsn == true) {
                collisionPhysics();
            }
        }
        else if (electron.style.top >= "400px") { // if the "electron" is equal to or greater than 400px
            document.removeEventListener('mousemove', onMouseMove);
            electron.onmouseup = document.getElementById("electronfade").style.top = "993px";
            electron.onmouseup = document.getElementById("electronfade").style.transition = "332ms linear";
    
            setTimeout(() => {  document.getElementById("electronfade").style.top = ax = Math.floor((Math.random() * 750) + 80); + "px"; }, 332.3);
            setTimeout(() => { document.getElementById("electronfade").style.top = "993px"; }, 662.8);

            if (orbt == true) {
                orbitPhysics();
            }
            if (clsn == true) {
                collisionPhysics();
            }
        }
        else { // if the "electron" is at the terminal height it can possibly be at
            document.removeEventListener('mousemove', onMouseMove);
            electron.onmouseup = document.getElementById("electronfade").style.top = "993px";
            electron.onmouseup = document.getElementById("electronfade").style.transition = "302ms linear";

            setTimeout(() => {  document.getElementById("electronfade").style.top = "820px"; }, 302.9);
            setTimeout(() => { document.getElementById("electronfade").style.top = "993px"; }, 602.8);

            if (orbt == true) {
                orbitPhysics();
            }
            if (clsn == true) {
                collisionPhysics();
            }
            
        }

        if (crash == true) {
            crashPhysics();
        }

        
        /*
        after the mouse click is released the "electron" drops
        adds the needed physics
        */
       };
       electron.ondragstart=function() {
        return false;
    };
}

/* 
    below i am scripting collision testing
    this will only use collision with the ground,
    for now

//

    Collision Physics
*/


function collisionPhysics() {

    // this will set a timeout and then change the background color of the "electron" when it hits, exactly

    collisionTimeout = setTimeout // to differ the setTimeout from the collision timeout

    collisionTimeout(() => {  electron.style.backgroundColor = "red" }, 0);
    collisionTimeout(() => {  electron.style.backgroundColor = "transparent" }, 805.2);    
}

/* 
    collision listening
*/

function collisOff() {
    document.getElementById("collisionCheckerOff").style.display = "none";
    document.getElementById("collisionChecker").style.display = "block";
}
function collisOn() {
    document.getElementById("collisionChecker").style.display = "none";
    document.getElementById("collisionCheckerOff").style.display = "block";
}

/*
    orbit listening
*/

function orbOff() {
    document.getElementById("orbitOff").style.display = "none";
    document.getElementById("orbitOn").style.display = "block";
    document.getElementById("electronorb").style.display = "none";
}
function orbOn() {
    document.getElementById("orbitOn").style.display = "none";
    document.getElementById("orbitOff").style.display = "block";
    document.getElementById("electronorb").style.display = "block";
}

/*
    crash listening
*/

function crashOff() {
    document.getElementById("crashOff").style.display = "none";
    document.getElementById("crashOn").style.display = "block";
    document.getElementById("electroncoll").style.display = "none";
}
function crashOn() {
    document.getElementById("crashOn").style.display = "none";
    document.getElementById("crashOff").style.display = "block";
    document.getElementById("electroncoll").style.display = "block";
}


/* 
    i am going to add some sort of half-arsed orbiting system
//
    Orbit Physics
*/

function orbitPhysics() { // orbit physics
    orbitTimeout = setTimeout // differs orbit timeouts to the settimeout

    if (electron.style.left <= "105px") { // if the "electron" is far beside the "orbiter" then
        electron.style.position = "absolute";
        orbitTimeout(() => {    electron.style.top = "0.1px"; }, 102.22);
    }
    if (electron.style.top >= "750px") {
        orbitTimeout(() => {    electron.style.top = "-0.2px", electron.style.left = "0.1px"; }, 102.22);
    }
    else if (electron.style.left >= "106px") { // else, orbit the "electron"
        orbitTimeout(() => {    electron.style.top = "0.1px", electron.style.left = "0.1px"; }, 102.22);
    }

    electron.style.transition = "401ms all";
}

/*
    my second attempt at crash physics
//
    Crash Physics
*/

function crashPhysics() { // on collision two electrons with explode on contact

    let coll = false

    if (electron.style.left >= "65%") { // if the "electron" is at the right side of the screen

        coll = true

        setTimeout(() => {  electron.style.display = "none"}, collisionCrash = Math.floor((Math.random() * 100) + 50)) // very half arsed, but you know what im getting at

        setTimeout(() => {  electron.style.display = "block"}, 450) // portal thingo, ill fix later
    }
    else {
        // this is just here
    }
    if (coll == true) { // if the collision is true (then)
        setTimeout(() => {  document.getElementById("electroncoll").style.display = "none"}, 0.1)
        setTimeout(() => {  document.getElementById("electroncoll").style.display = "block"}, 1000.1)
    }
    else {
        console.error("Crash expected.") // log that it expected a crash
    }
}