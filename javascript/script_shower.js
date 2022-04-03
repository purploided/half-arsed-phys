// this script shows the other scripts

function ShowOn() {
    document.getElementById("collisionChecker").style.display = "block";
    setTimeout(() => { document.getElementById("collisionChecker").style.left = "12%"; }, 300);

    document.getElementById("orbitOn").style.display = "block";
    setTimeout(() => { document.getElementById("orbitOn").style.left = "24%"; }, 300);

    document.getElementById("crashOn").style.display = "block";
    setTimeout(() => { document.getElementById("crashOn").style.left = "36%"; }, 300);

    document.getElementById("susOn").style.display = "block";
    setTimeout(() => { document.getElementById("susOn").style.left = "48%"; }, 300);

    document.getElementById("ballOn").style.display = "block";
    setTimeout(() => { document.getElementById("ballOn").style.left = "60%"; }, 300);

    document.getElementById("ShowSS").style.display = "block";
    document.getElementById("SHOWS").style.display = "none";
}

function ShowOff() {
    document.getElementById("collisionChecker").style.left = "0%";
    setTimeout(() => { document.getElementById("collisionChecker").style.display = "none"; }, 500);

    document.getElementById("orbitOn").style.left = "0%";
    setTimeout(() => { document.getElementById("orbitOn").style.display = "none"; }, 500);

    document.getElementById("crashOn").style.left = "0%";
    setTimeout(() => { document.getElementById("crashOn").style.display = "none"; }, 500);

    document.getElementById("susOn").style.left = "0%";
    setTimeout(() => { document.getElementById("susOn").style.display = "none"; }, 500);

    document.getElementById("ballOn").style.left = "0%";
    setTimeout(() => { document.getElementById("ballOn").style.display = "none"; }, 500);

    document.getElementById("ShowSS").style.display = "none";
    document.getElementById("SHOWS").style.display = "block";
}