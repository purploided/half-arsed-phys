/*
    This is an electron app about physics that Glowstik_ on discord recommended me to create
    all the code written within this script is commented to a tea
    you can also comment/uncomment the other blocks to get some sort of chaotic version of the physics
*/

let clsn = false;
let orbt = false;
let crash = false;
let susp = false;
let ballo = false;
let chain = false;
let thermal = false;
let nuclear = false;
var electron = document.getElementById("electron");
var electron2 = document.getElementById("electron2");
var nukeScreen = document.getElementById("nukeScreen");

/*
    Drag Physics
*/
electron.onmousedown = function (event) {
    let shiftX = event.clientX - electron.getBoundingClientRect()
        .left;
    let shiftY = event.clientY - electron.getBoundingClientRect()
        .top;
    electron.style.position = "absolute";
    electron.style.transition = "2ms linear";
    electron.style.zIndex = 1000;
    document.body.append(electron);
    moveAt(event.pageX, event.pageY);
    setTimeout(() => { console.warn(`The "electron" is at ${shiftX}, ${shiftY}`); }, 1000); // gathers the X and Y position of the "electron" 
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
    function detectColl() {
        var element = document.getElementById("electron"), // this is the "electron"
            rect = element.getBoundingClientRect(),
            displayte = element.style.display;

        element.style.display = "none"; // this is to hide the "electron"

        var topElement = document.elementFromPoint(rect.left, rect.top, rect.right, rect.bottom); // this is to get the element that is at the top of the "electron"

        element.style.display = displayte;

        if (topElement.className.match(/electron/)) { // this is to check if the "electron" is colliding with the "electron2"

            electron.style.backgroundColor = "yellow";
            setTimeout(() => { electron.style.backgroundColor = "transparent"; }, 365);

            electron2.style.backgroundColor = "orange";
            setTimeout(() => { electron2.style.backgroundColor = "transparent"; }, 365);

            thermoDynamics();
            sparkChains();

            chain = true; // this is to set the chain to true
        }
        else {
            // 
        }
    }

    // this code will check for collision every 10ms

    const timer = setInterval(() => { // this is the timer for the collision detection
        detectColl();
        clearInterval(timer);
    }, 10);

    /*
        Spark Chains
    */

    function sparkChains() { // this will create the spark chains
        if (chain == true) {

            setTimeout(() => { electron2.style.backgroundColor = "orange"; }, 500);
            setTimeout(() => { electron2.style.backgroundColor = "transparent"; }, 2000);

            setTimeout(() => { chain = false; }, 2000);
        }
        else {
            //
        }
    }
    
    let allowNukes = false; // Allows the nukes (inside the thermodynamics function) to be activated

    /*
        Thermodynamics
    */

    function thermoDynamics() { // this will create the thermodynamics
        if (allowNukes == true) {
            if (chain == true) {

                thermal = true; // this is to set the thermal to true

                /*
                    Nuclear Countdown
                */

                setTimeout(() => { electron.style.backgroundColor = "yellow"; }, 500);
                setTimeout(() => { electron.style.backgroundColor = "orange"; }, 5500);
                setTimeout(() => { electron.style.backgroundColor = "red"; }, 11000);
                setTimeout(() => { electron.style.backgroundColor = "transparent"; }, 12000);

                setTimeout(() => { chain = false; }, 5000); // this is to set the chain to false

                if (thermal == true) { // if thermal is true then the nuke will be activated

                    /*
                        Nuclear Reaction
                    */

                    setTimeout(() => { nukeScreen.style.opacity = "100", nukeScreen.style.zIndex = "110000"; }, 13000);
                    setTimeout(() => { nukeScreen.style.opacity = "0", nukeScreen.style.zIndex = "-5"; }, 20000);

                    setTimeout(() => { thermal = false }, 20000);
                }
                else {
                    //
                }
            }
            else {
                thermal = false;
            }
        }
        else { // if allowNukes is false
            if (chain == true) {
                thermal = true;

                if (thermal == true) { // thermal countdown w/o the nuke
                    setTimeout(() => { electron.style.backgroundColor = "yellow"; }, 500);
                    setTimeout(() => { electron.style.backgroundColor = "orange"; }, 1500);
                    setTimeout(() => { electron.style.backgroundColor = "red"; }, 2500);
                    setTimeout(() => { electron.style.backgroundColor = "transparent"; }, 3500);
                }
                else {
                    //
                }
            }
        }
    }

    /*
        Electrodynamics
    */

    function electroDynamics() {

        let magneticField = false; // this is the magnetic field

        electron.style.transition = "0ms linear";
    
        // create a theoretical magnetic field

        if (magneticField == true) { // if the magnetic field is true then

            electron.onmouseenter = () => { // when the "electron" is hovered over then
                electron.style.borderWidth = "1px";
                electron.style.borderColor = "lightblue";
                electron.style.borderStyle = "solid";
                electron.style.borderRadius = "50%";
            }
            electron.onmouseleave = () => { // when the "electron" is not hovered over then
                electron.style.borderWidth = "0px";
                electron.style.borderColor = "transparent";
                electron.style.borderStyle = "none";
                electron.style.borderRadius = "0%";

        /*
            the second i did this it made a cool "warping" effect when you
            hover over the "electron" pretty sick if i do say so
            myself
        */
            }

        /*
            this script will create a half-arsed magnetic pull
            from "electron2" to the "electron"
        */
            setTimeout(() => {
                electron2.style.left = `${electron.style.left}`;
                electron2.style.top = `${electron.style.top}`;
            }, 600);
    
            electron2.style.transition = "1020ms linear";
        }
        else {
            // do nothing
        }
    }
    
    electroDynamics();

    /*
        Weight
    */

    function weight() { // weight is the DRAG WEIGHT and not the weight of the ball!

        /*
            this script will create a weight for the "electron"

            This weight controls how realistically heavy the "electron" is
        */

        let weight = 0; // this is the weight of the "electron"

        switch(weight) {
            case 0:
                //
                break;
            case 1:
                electron.style.transition = "50ms linear";
                break;
            case 2:
                electron.style.transition = "500ms linear";
                break;
            case 3:
                electron.style.transition = "1000ms linear";
                break;
            case 4:
                electron.style.transition = "5000ms linear";
                break;
            default:
                //
                break;
        }
    }

    weight();

    /*
        Density
    */

    function density() { // this is the density of the "electron"
        
        /*
            this script will create a density for the "electron"

            |---------------------------------------------------------------------------------------------------------------------|
            |                                           --- WARNING PLEASE READ ---                                               |
            |                                The density function is part of the weight function                                  |
            |---------------------------------------------------------------------------------------------------------------------|

            this density will show how denser objects fall to the ground faster

        */

        let density = 0; // this is the density of the "electron"

        switch(density) {
            case 0:
                electron.onmouseup = document.getElementById("electron").style.top = "1010px";
                electron.onmouseup = document.getElementById("electron").style.transition = "302ms linear";

                electron.onmouseup = electron.style.transform = "rotate(180deg)";

                setTimeout(() => { document.getElementById("electron").style.top = "970px"; }, 302.3);
                setTimeout(() => { document.getElementById("electron").style.top = "1010px"; }, 602.8);
                break;
            case 1:
                electron.onmouseup = document.getElementById("electron").style.top = "1010px";
                electron.onmouseup = document.getElementById("electron").style.transition = "202ms linear";

                electron.onmouseup = electron.style.transform = "rotate(180deg)";

                setTimeout(() => { document.getElementById("electron").style.top = "970px"; }, 202.3);
                setTimeout(() => { document.getElementById("electron").style.top = "1010px"; }, 402.8);
                break;
            case 2:
                electron.onmouseup = document.getElementById("electron").style.top = "1010px";
                electron.onmouseup = document.getElementById("electron").style.transition = "102ms linear";
                break;
            case 3:
                electron.onmouseup = document.getElementById("electron").style.top = "1010px";
                electron.onmouseup = document.getElementById("electron").style.transition = "52ms linear";
                break;
            default:
                //
                break;
        }

        /*
            This part of the "density" function makes the
            "electron" collapse in on itself to make black hole
            effect-type-thingy

            it has a 50/50 chance to either become neutron star (magnetar and pulsar)
            or black hole
        */

        if (density == 4) { // neutron star
            electron.onmouseenter = () => { // when the "electron" is hovered over then
                electron.style.borderWidth = "1px";
                electron.style.borderColor = "blue";
                electron.style.borderStyle = "solid";
                electron.style.borderRadius = "50%";
            }
            electron.onmouseleave = () => { // when the "electron" is not hovered over then
                electron.style.borderWidth = "0px";
                electron.style.borderColor = "transparent";
                electron.style.borderStyle = "none";
                electron.style.borderRadius = "0%";
            }

            setTimeout(() => {
                electron2.style.left = `${electron.style.left}`;
                electron2.style.top = `${electron.style.top}`;
            }, 600);
    
            electron2.style.transition = "200ms linear";

            electron.onmouseup = document.getElementById("electron").style.top = "1010px";
            electron.onmouseup = document.getElementById("electron").style.transition = "302ms linear";

            electron.onmouseup = electron.style.transform = "rotate(180deg)";

            setTimeout(() => { document.getElementById("electron").style.top = "970px"; }, 302.3);
            setTimeout(() => { document.getElementById("electron").style.top = "1010px"; }, 602.8);
        }
        else if(density >= 5) { // black hole
            electron.onmouseenter = () => { // when the "electron" is hovered over then
                electron.style.borderWidth = "2px";
                electron.style.borderColor = "orange";
                electron.style.borderStyle = "solid";
                electron.style.borderRadius = "50%";
                electron.style.opacity = "1";
            }
            electron.onmouseleave = () => { // when the "electron" is not hovered over then
                electron.style.borderWidth = "2px";
                electron.style.borderColor = "orange";
                electron.style.opacity = "0.5";
                electron.style.borderRadius = "50%";
            }

            setTimeout(() => {
                electron2.style.left = `${electron.style.left}`;
                electron2.style.top = `${electron.style.top}`;
            }, 600);
    
            electron2.style.transition = "400ms linear";
        }
    }
    
    // moving the "electron" to the specifics of the mouse
    document.addEventListener('mousemove', onMouseMove);
    // stops the movement putting the "electron" in exact spot of the mouse
    electron.onmouseup = function () {

        

        /*
            the code below is just for testing scenarios where the "electron" is above a limit
            this needs some great fixes, but it works perfectly for now
        */
        if (electron.style.top >= "700px") { // if the "electron" is equal to or greater than 700px
            document.removeEventListener('mousemove', onMouseMove);

            density();

            if (orbt == true) {
                orbitPhysics();
            }
            if (clsn == true) {
                collisionPhysics();
            }
            fpsSaver();
            modsList();
            wallScrape();
            if (susp == true) {
                invisibleSuspension();
            }
        }
        else if (electron.style.top >= "400px") { // if the "electron" is equal to or greater than 400px
            document.removeEventListener('mousemove', onMouseMove);

            density();
            
            if (orbt == true) {
                orbitPhysics();
            }
            if (clsn == true) {
                collisionPhysics();
            }
            fpsSaver();
            modsList();
            wallScrape();
            if (susp == true) {
                invisibleSuspension();
            }
        }
        else { // if the "electron" is at the terminal height it can possibly be at
            document.removeEventListener('mousemove', onMouseMove);

            density();

            if (orbt == true) {
                orbitPhysics();
            }
            if (clsn == true) {
                collisionPhysics();
            }
            fpsSaver();
            modsList();
            wallScrape();
            if (susp == true) {
                invisibleSuspension();
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
    electron.ondragstart = function () {
        return false;
    };
};
/*
    below i am scripting collision testing
    this will only use collision with the ground,
    for now

//

    Collision Physics
*/

function collisionPhysics() {
    // this will set a timeout and then change the background color of the "electron" when it hits, exactly
    collisionTimeout = setTimeout; // to differ the setTimeout from the collision timeout
    collisionTimeout(() => { electron.style.backgroundColor = "red"; }, 0);
    collisionTimeout(() => { electron.style.backgroundColor = "transparent"; }, 805.2);
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
function susOff() {
    document.getElementById("susOff").style.display = "none";
    document.getElementById("susOn").style.display = "block";
    document.getElementById("suslimit").style.display = "none";
}
function susOn() {
    document.getElementById("susOn").style.display = "none";
    document.getElementById("susOff").style.display = "block";
    document.getElementById("suslimit").style.display = "block";
}
function ballOff() {
    document.getElementById("ballOff").style.display = "none";
    document.getElementById("ballOn").style.display = "block";
    document.getElementById("electron2").style.display = "none";
}
function ballOn() {
    document.getElementById("ballOn").style.display = "none";
    document.getElementById("ballOff").style.display = "block";
    document.getElementById("electron2").style.display = "block";
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
function orbitPhysics() {
    orbitTimeout = setTimeout; // differs orbit timeouts to the settimeout
    if (electron.style.left <= "105px") { // if the "electron" is far beside the "orbiter" then
        electron.style.position = "absolute";
        orbitTimeout(() => { electron.style.top = "0.1px"; }, 102.22);
    }
    if (electron.style.top >= "750px") {
        orbitTimeout(() => { electron.style.top = "-0.2px", electron.style.left = "0.1px"; }, 102.22);
    }
    else if (electron.style.left >= "106px") { // else, orbit the "electron"
        orbitTimeout(() => { electron.style.top = "0.1px", electron.style.left = "0.1px"; }, 102.22);
    }
    else {
        console.error("Orbit failed, or expected but didn't happen.");
    }
    electron.style.transition = "401ms all";
}
/*
    my second attempt at crash physics
//
    Crash Physics
*/
function crashPhysics() {
    let coll = false;
    if (electron.style.left >= "65%") {
        coll = true;
        setTimeout(() => { electron.style.display = "none"; }, collisionCrash = Math.floor((Math.random() * 100) + 50)); // very half arsed, but you know what im getting at
        setTimeout(() => { electron.style.display = "block"; }, 450); // portal thingo, ill fix later
    }
    else {
        // this is just here
    }
    if (coll == true) { // if the collision is true (then)
        setTimeout(() => { document.getElementById("electroncoll").style.display = "none"; }, 0.1);
        setTimeout(() => { document.getElementById("electroncoll").style.display = "block"; }, 1000.1);
    }
    else {
        console.error("Crash expected."); // log that it expected a crash
    }
}


/*
    i am going to script a "wall scraping" type thingy
//
    Wall Scraping
*/
function wallScrape() { // this is the wall scraping function
    if (electron.style.left <= "1%") { // if the "electron" is near the left wall then
        electron.style.top = "-0.1px";
        electron.style.transition = "5500ms linear";

        // this will make the "electron" smaller as it goes down the wall

        electron.style.width = "15px";
        electron.style.height = "15px";

        setTimeout((() => { electron.style.width = "45px"; electron.style.height = "45px"; }), 5500); // this will make the "electron" bigger again
    }
    else {
        // this is just here
    }
}
/*
    i am about to script a system to help with lower end pcs
//
    FPS Saver
*/
function fpsSaver() {
    // lag switch
    let lagSwitch = false;
    // let lagSwitch = true \\
    if (lagSwitch == true) { // set to true for better fps
        electron.style.transition = "15ms linear";
    }
    else {
        // this just here
    }
    // quality switch
    let qualitySwitch = false;
    // let qualitySwitch = true \\
    if (qualitySwitch == true) { // set to true for worse quality (higher fps)
        electron.style.filter = "blur(3px)";
    }
    else {
        electron.style.filter = "blur(0px)";
    }
    // arcade physics
    let arcadeSwitch = false;
    // let arcadeSwitch = true \\
    if (arcadeSwitch == true) { // set to true for arcade physics (worse fps)
        electron.style.transition = "400ms all";
    }
    else {
        // this just here
    }
    // more arcade physics
    let arcadeMax = false;
    // let arcadeMax = true; \\
    if (arcadeMax == true) {
        electron.style.filter = "blur(1px)";
        electron.style.borderRadius = "200%";
        electron.style.borderColor = "black";
        electron.style.borderStyle = "solid";
        electron.style.borderWidth = "5px";
        electron.style.borderLeft = "-5px";
    }
    else {
        // this is just here
    }
    /*    _____________________________________________________________________
         /                                                                      \
        |                             HOW TO USE                                 |
        |                                                                        |
        |     For better fps:                                                    |
        |                                                                        |
        |     lagSwitch = true; (better fps)                                     |
        |     qualitySwitch = true; (better fps)                                 |
        |     arcadeSwitch = false; (better fps)                                 |
        |     arcadeMax = false; (better fps)                                    |
        |                                                                        |
        |     For better quality:                                                |
        |                                                                        |
        |     lagSwitch = false; (worse fps but smoother experience)             |
        |     qualitySwitch = false; (worse fps but better quality)              |
        |     arcadeSwitch = true; (worse fps, and for the arcade enthusiasts)   |
        |     arcadeMax = true; (worse fps, and for the arcade enthusiasts)      |
        |                                                                        |
        |                                                                        |
        |     or make your own configs!                                          |
        \________________________________________________________________________/
    */
}
//______________________________________________________________________________________________________________________\\
/*
    mods time
//
    Mods Function
*/
function modsList() {
    let modSlot = 0;
    let modSlot1 = 0;
    let modSlot2 = 0;
    let modSlot3 = 0;
    let modSlot4 = 0;
    if (modSlot == 1) {
        // The Example Mod
        /*
           MOD NAME: RealTime Oribiter
           MOD DESCRIPTION: Makes the "electron" orbit in REALTIME
        */
        /*
        orbitTimeoutO = setTimeout // differs orbit timeouts to the settimeout

        if (electron.style.left <= "105px") { // if the "electron" is far beside the "orbiter" then
            electron.style.position = "absolute";
            orbitTimeoutO(() => {    electron.style.top = "1.1px"; }, 102.22);
        }
        if (electron.style.top >= "750px") {
            orbitTimeoutO(() => {    electron.style.top = "-1.2px", electron.style.left = "1.1px"; }, 102.22);
        }
        else if (electron.style.left >= "106px") { // else, orbit the "electron"
            orbitTimeoutO(() => {    electron.style.top = "1.1px", electron.style.left = "1.1px"; }, 102.22);
        }

        electron.style.transition = "5001ms all";
        */
    }
    else if (modSlot1 == 1) {
        /*
           MOD NAME:
           MOD DESCRIPTION:
        */
    }
    else if (modSlot2 == 1) {
        /*
           MOD NAME:
           MOD DESCRIPTION:
        */
    }
    else if (modSlot3 == 1) {
        /*
           MOD NAME:
           MOD DESCRIPTION:
        */
    }
    else if (modSlot4 == 1) {
        /*
           MOD NAME:
           MOD DESCRIPTION:
        */
    }
    else {
        console.warn("No mod active.");
    }
}
/*



       ____________________________________________________________________
     /                                                                      \
    |                             HOW TO USE                                 |
    |                                                                        |
    |     Put code or scripts you find inside the "mod" statements           |                                                                   |
    |     To do this you can paste the code inside the if statements         |
    |     and set the specific mod slot to "1"                               |
    |     Please be sure to IF copying code from online, e.g. github         |
    |     make sure to read the code                                         |
    |                                                                        |
    |     For making mods:                                                   |
    |                                                                        |
    |     Edit the MOD NAME & MOD DESCRIPTION to your Mod's name and desc-   |
    |     ription. Please do not create mods that will jack anothers game.   |
    |     All mods can have their own license, meaning some you can edit, s- |
    |     ome you cannot, please be sure to abide the the selected mod's     |
    |     license before modifying or "skidding".                            |
    |                                                                        |
    |     Have fun!                                                          |
    \________________________________      __________________________________/
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    |      |
                                    --------



*/
/*
    i am about to script suspension physics, or what ill call "invisble suspension"
//
    Suspension Physics
*/
function invisibleSuspension() {
    let suspension = "none"; // the diff for suspension
    electron.style.transition = "352ms all";
    if (suspension == "short") { // if the suspension diff is short
        setTimeout(() => { document.getElementById("electron").style.top = "990px"; }, 355.9);
        setTimeout(() => { document.getElementById("electron").style.top = "1010.55px"; }, 755.8);
        setTimeout(() => { document.getElementById("electron").style.top = "991px"; }, 855.8);
        setTimeout(() => { document.getElementById("electron").style.top = "1010px"; }, 955.8);
    }
    else if (suspension == "long") { // if the suspension diff is long
        setTimeout(() => { document.getElementById("electron").style.top = "985px"; }, 355.9);
        setTimeout(() => { document.getElementById("electron").style.top = "1010.55px"; }, 655.8);
        setTimeout(() => { document.getElementById("electron").style.top = "989px"; }, 855.8);
        setTimeout(() => { document.getElementById("electron").style.top = "1010px"; }, 1000.8);
    }
    else {
        console.error("Suspension Expected but failed to execute or didn't happen."); // error
    }
}
/*
    the code i am about to script is for adding drag to the
    "electron"
//
    Glide/Drag Physics
*/
/*

function glidePhysics() { // glide physics

    // needs a bit of work, but it works for now

    switch (true) { // switch statement for the "electron" to glide
        case (electron.style.left <= "10%"): // if the "electron" is less than 10% of the way across the screen
            electron.style.left = "11.33%";
            break;
        case (electron.style.left <= "20%"): // if the "electron" is less than 20% of the way across the screen
            electron.style.left = "21.33%";
            break;
        case (electron.style.left <= "30%"): // if the "electron" is less than 30% of the way across the screen
            electron.style.left = "31.33%";
            break;
        case (electron.style.left <= "40%"): // if the "electron" is less than 40% of the way across the screen
            electron.style.left = "41.33%";
            break;
        case (electron.style.left <= "50%"): // if the "electron" is less than 50% of the way across the screen
            electron.style.left = "51.33%";
            break;
        case (electron.style.left <= "60%"): // if the "electron" is less than 60% of the way across the screen
            electron.style.left = "61.33%";
            break;
        case (electron.style.left <= "70%"): // if the "electron" is less than 70% of the way across the screen
            electron.style.left = "71.33%";
            break;
        case (electron.style.left <= "80%"): // if the "electron" is less than 80% of the way across the screen
            electron.style.left = "81.33%";
            break;
    }
    electron.style.transition = "400ms all";
}
*/ 

electron2.onmousedown = function (event) {
    let shiftX = event.clientX - electron2.getBoundingClientRect()
        .left;
    let shiftY = event.clientY - electron2.getBoundingClientRect()
        .top;
    electron2.style.position = "absolute";
    electron2.style.transition = "2ms linear";
    electron2.style.zIndex = 1000;
    document.body.append(electron2);
    moveAt(event.pageX, event.pageY);
    /*
        move the "electron" along the X & Y axis
        basically remembering the inital position
    */
    function moveAt(pageX, pageY) {
        electron2.style.left = `${pageX - shiftX}px`; // (chaos code) electron.style.left = `${pageX - shiftX}%`;
        electron2.style.top = `${pageY - shiftY}px`; // (chaos code) electron.style.top = `${pageY - shiftY}%`;
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    // moving the "electron" to the specifics of the mouse
    document.addEventListener('mousemove', onMouseMove);
    // stops the movement putting the "electron" in exact spot of the mouse
    electron2.onmouseup = function () {

        /*
            the code below is just for testing scenarios where the "electron" is above a limit
            this needs some great fixes, but it works perfectly for now
        */
        if (electron2.style.top >= "700px") { // if the "electron" is equal to or greater than 700px
            document.removeEventListener('mousemove', onMouseMove);
            electron2.onmouseup = document.getElementById("electron2").style.top = "1010px";
            electron2.onmouseup = document.getElementById("electron2").style.transition = "302ms linear";

            electron2.onmouseup = electron2.style.transform = "rotate(180deg)";

            setTimeout(() => { document.getElementById("electron2").style.top = "970px"; }, 302.3);
            setTimeout(() => { document.getElementById("electron2").style.top = "1010px"; }, 602.8);
        }
        else if (electron2.style.top >= "400px") { // if the "electron" is equal to or greater than 400px
            document.removeEventListener('mousemove', onMouseMove);
            electron2.onmouseup = document.getElementById("electron2").style.top = "1010px";
            electron2.onmouseup = document.getElementById("electron2").style.transition = "332ms linear";

            electron2.onmouseup = electron2.style.transform = "rotate(180deg)";

            setTimeout(() => { document.getElementById("electron2").style.top = ax = Math.floor((Math.random() * 750) + 80); +"px"; }, 332.3);
            setTimeout(() => { document.getElementById("electron2").style.top = "1010px"; }, 662.8);
        }
        else { // if the "electron" is at the terminal height it can possibly be at
            document.removeEventListener('mousemove', onMouseMove);
            electron2.onmouseup = document.getElementById("electron2").style.top = "1010px";
            electron2.onmouseup = document.getElementById("electron2").style.transition = "302ms linear";

            electron2.onmouseup = electron2.style.transform = "rotate(180deg)";

            setTimeout(() => { document.getElementById("electron2").style.top = "820px"; }, 302.9);
            setTimeout(() => { document.getElementById("electron2").style.top = "1010px"; }, 602.8);
        }
        /*
        after the mouse click is released the "electron" drops
        adds the needed physics
        */
    };
    electron2.ondragstart = function () {
        return false;
    };
};