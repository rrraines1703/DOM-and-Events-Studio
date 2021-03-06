// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOff = null;
let flightStatus = null;
let spaceShuttleHeight = null;
let shuttleBackground = null;
let missionAbort = null;
let landing = null;
let left = null;
let right = null;
let up = null;
let down = null;

window.addEventListener("load", function () {
    takeOff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleBackground = document.getElementById("shuttleBackground");
    missionAbort = document.getElementById("missionAbort");
    landing = document.getElementById("landing");
    left = document.getElementById("left");
    right = document.getElementById("right");
    up = document.getElementById("up");
    down = document.getElementById("down");
    let newShuttleHeight = 0;
    let verticalPosition= 0;
    let horozontalPosition= 0;
    console.log('Window Loaded');

    takeOff.addEventListener("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight.";
            newShuttleHeight = 10000;
            spaceShuttleHeight.innerHTML = `${newShuttleHeight}`;
        }
        shuttleBackground.style.background = 'blue';
    });

    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.background = 'green';
            newShuttleHeight = 0;
            spaceShuttleHeight.innerHTML = `${newShuttleHeight}`;
    });

    missionAbort.addEventListener("click", function() {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            flightStatus.innerHTML = "Mission aborted";
            newShuttleHeight = 0;
            spaceShuttleHeight.innerHTML = `${newShuttleHeight}`;
        }
        shuttleBackground.style.background = 'green';
    });

    let rocket = document.querySelector("img");
    rocket.style.position = "relative";

    up.addEventListener("click", function() {
        verticalPosition -= 10; 
        document.querySelector("img").style.top = `${verticalPosition}px`;
        newShuttleHeight += 10000;
        spaceShuttleHeight.innerHTML = `${newShuttleHeight}`;
    });

    down.addEventListener("click", function() {
        verticalPosition += 10; 
        document.querySelector("img").style.top = `${verticalPosition}px`;
        newShuttleHeight -= 10000;
        spaceShuttleHeight.innerHTML = `${newShuttleHeight}`;
    });

    left.addEventListener("click", function() {
        horozontalPosition -= 10; 
        document.querySelector("img").style.left = `${horozontalPosition}px`;
    });

    right.addEventListener("click", function() {
        horozontalPosition += 10; 
        document.querySelector("img").style.left = `${horozontalPosition}px`;
    });





    });
