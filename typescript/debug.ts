// this typescript file is for those who would rather debug the game

function ping() { // grabs the ping from the website
    var start = new Date().getTime();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/", false);
    xhr.send();
    var end = new Date().getTime();
    var time = end - start;
    return time + "ms"; // returns the "ms" from the Http Request
}
function info(quote: string) {
    if (quote == "ping") { // grabs the ping from the website
        var start = new Date().getTime();
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/", false);
        xhr.send();
        var end = new Date().getTime();
        var time = end - start;
        return time + "ms"; // returns the "ms" from the Http Request
    }
    else if(quote == "version") { // returns the version of the game
        return "1.0.2";
    }
    else if(quote == "author") { // returns the author of the game
        return "Nicohlas";
    }
    else if(quote == "name") { // returns the name of the game
        return "phys-ed";
    }
    else if(quote == "info") { // returns the info of the website
        console.log("Created by Nicohlas\nVersion: 1.0.2\nGame Name: phys-ed\nPing: " + ping());
    }
    else { // return an error
        return "Error: Invalid Command";
    }
}