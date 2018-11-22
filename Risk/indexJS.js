let background = document.getElementById("background");
let eu         = document.getElementById("eu");
let na         = document.getElementById("na");
let oa         = document.getElementById("oa");
let sa         = document.getElementById("sa");
let af         = document.getElementById("af");
let asi        = document.getElementById("asi");
let btnEnd     = document.getElementById("btnEnd");




eu.onclick = function () {
    console.log("eu")
};
na.onclick = function () {
    console.log("na")
};
oa.onclick = function () {
    console.log("oa")
};
sa.onclick = function () {
    console.log("sa")
};
af.onclick = function () {
    console.log("af")
};
asi.onclick = function () {
    console.log("asi")
};

btnEnd.onclick = function () {

};

function bAttack() {
    let b = Math.floor(Math.random()*6)+1;
    let r = Math.floor(Math.random()*6)+1;

    if (b > r) {
        //Blue wins
        console.log("B-W")
    }
    else if (b <= r) {
        //Blue loses
        console.log("B-L")
    }
}

function rAttack() {
    let b = Math.floor(Math.random()*6)+1;
    let r = Math.floor(Math.random()*6)+1;

    if (b < r) {
        //Red wins
        console.log("R-W")
    }
    else if (b >= r) {
        //Red loses
        console.log("R-L")
    }
}
