//turned off = false represents turned off
var switch_state = false;
var switch_state2 = false;
var switch_state3 = false;
var menu_state = false;

function reset() {
    document.querySelector(".innerswitch").style.left = "0px";
    document.querySelector("#switch2 .innerswitch").style.left = "0px";
    document.querySelector("#switch3 .innerswitch").style.left = "0px";
    document.querySelector("#switch2 .innerswitch").style.backgroundColor = "red";
    document.querySelector("#switch3 .innerswitch").style.backgroundColor = "red";
    document.querySelector(".innerswitch").style.backgroundColor = "red";
    document.querySelector("#darkmode").style.backgroundColor = "#FFF";
    document.querySelector("#darkmode").style.color = "#333";
    document.querySelector("p").textContent = "OFF";
    document.querySelector("#p2").textContent = "OFF";
    document.querySelector("#p3").textContent = "OFF";
    switch_state = false;
    switch_state2 = false; 
    switch_state3 = false;
}
function toggleOn() {

    if (switch_state === false) {
        reset();
        document.querySelector(".innerswitch").style.left = "45px";
        document.querySelector(".innerswitch").style.backgroundColor = "green";
        document.querySelector("#darkmode").style.backgroundColor = "#333";
        document.querySelector("#darkmode").style.color = "#FFF";
        document.querySelector("p").textContent = "ON";
        switch_state = true;

    } else {
        document.querySelector(".innerswitch").style.left = "0px";
        document.querySelector(".innerswitch").style.backgroundColor = "red";
        document.querySelector("#darkmode").style.backgroundColor = "red";
        document.querySelector("#darkmode").style.color = "green";
        document.querySelector("p").textContent = "OFF";
        switch_state = false;
    }
}

function toggleOn2() {

    if (switch_state2 === false) {
        reset();
        document.querySelector("#switch2 .innerswitch").style.left = "45px";
        document.querySelector("#switch2 .innerswitch").style.backgroundColor = "green";
        document.querySelector("#darkmode").style.backgroundColor = "black";
        document.querySelector("#darkmode").style.color = "yellow";
        document.querySelector("#p2").textContent = "ON";
        switch_state2 = true;

    } else {
        document.querySelector("#switch2 .innerswitch").style.left = "0px";
        document.querySelector("#switch2 .innerswitch").style.backgroundColor = "red";
        document.querySelector("#darkmode").style.backgroundColor = "yellow";
        document.querySelector("#darkmode").style.color = "red";
        document.querySelector("#p2").textContent = "OFF";
        switch_state2 = false;
    }
}
function toggleOn3() {

    if (switch_state3 === false) {
        reset();
        document.querySelector("#switch3 .innerswitch").style.left = "45px";
        document.querySelector("#switch3 .innerswitch").style.backgroundColor = "green";
        document.querySelector("#darkmode").style.backgroundColor = "blue";
        document.querySelector("#darkmode").style.color = "pink";
        document.querySelector("#p3").textContent = "ON";
        switch_state3 = true;

    } else {
        document.querySelector("#switch3 .innerswitch").style.left = "0px";
        document.querySelector("#switch3 .innerswitch").style.backgroundColor = "red";
        document.querySelector("#darkmode").style.backgroundColor = "purple";
        document.querySelector("#darkmode").style.color = "#DAD";
        document.querySelector("#p3").textContent = "OFF";
        switch_state3 = false;
    }
}
function MenuToggle() {
    if (menu_state === false) {
        document.querySelector("#menu").style.right = "0";
        menu_state = true;
    } else {
        document.querySelector("#menu").style.right = "-70";
        menu_state = false;
    }
}