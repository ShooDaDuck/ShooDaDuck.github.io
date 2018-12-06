/*
let maps = document.getElementById("maps");
let background = document.getElementById("background");
let eu         = document.getElementById("eu");
let na         = document.getElementById("na");
let oa         = document.getElementById("oa");
let sa         = document.getElementById("sa");
let af         = document.getElementById("af");
let asi        = document.getElementById("asi");
let btnEnd     = document.getElementById("btnEnd");
*/
let maps       = document.getElementById("maps");
let background = document.getElementById("background");
let eu         = "47c1dcff";
let na         = "d9dd23ff";
let oa         = "a31aa6ff";
let sa         = "ea4224ff";
let af         = "9c7805ff";
let asi        = "89db8cff";



function numbtohex(rgb) {
    let hex = Number(rgb).toString(16);

    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}
maps.onclick = function (event) {

    html2canvas(document.body).then(function (canvas) {
        const ctx = canvas.getContext('2d');
        let x = event.clientX;
        let y = event.clientY;
        let p = ctx.getImageData(x, y, 1, 1).data;
        let rHex = numbtohex(p[0]);
        let gHex = numbtohex(p[1]);
        let bHex = numbtohex(p[2]);
        let aHex = numbtohex(p[3]);
        let rgbaHex1 = rHex + gHex + bHex + aHex;
        console.log(rgbaHex1);

    })};





    /* if (asi.onclick) {
        moveToAsi()
    }
    else if (af.onclick) {
        moveToAf()
    }
    else if (na.onclick) {
        moveToNa()
    }
    else {
        alert("Unrecable province")
    }
});   /*
na.onclick = function () {
    console.log("na");
    if (eu.onclick) {
        moveToEu()
    }
    else if (asi.onclick) {
        moveToAsi()
    }
    else if (sa.onclick) {
        moveToSa()
    }
    else {
        alert("Unrecable province")
    }
};
oa.onclick = function () {
    console.log("oa");
    if (asi.onclick) {
        moveToAsi()
    }
    else {
        alert("Unrecable province")
    }
};
sa.onclick = function () {
    console.log("sa");
    if (af.onclick) {
        moveToAf()
    }
    else if (na.onclick) {
        moveToNa()
    }
    else if (document.onclick) {
        alert("Unrecable province")
    }
};
af.onclick = function () {
    console.log("af");
    if (eu.onclick) {
        moveToEu()
    }
    else if (oa.onclick) {
        moveToOa()
    }
    else if (af.onclick) {
        moveToAf()
    }
    else {
        alert("Unrecable province")
    }
};
asi.onclick = function () {
    console.log("asi");
    if (eu.onclick) {
        moveToEu()
    }
    else if (oa.onclick) {
        moveToOa()
    }
    else if (af.onclick) {
        moveToAf()
    }
    else {
        alert("Unrecable province")
    }
};

btnEnd.onclick = function () {

};

function moveToEu() {

}
function moveToOa() {

}
function moveToNa() {

}
function moveToAf() {

}
function moveToAsi() {

}
function moveToSa() {

}
*/
let btnAttackR = document.getElementById("btnAttackR");
let btnAttackB = document.getElementById("btnAttackB");
let btlout = document.getElementById("btlout");


btnAttackB.onclick = function () {
    bAttack()
};
btnAttackR.onclick = function () {
    rAttack()
};


function bAttack() {
    let b = Math.floor(Math.random()*6)+1;
    let r = Math.floor(Math.random()*6)+1;

    if (b > r) {
        //Blue wins
        console.log("B-W");
        btlout.innerHTML += "Blue wins, "
    }
    else if (b <= r) {
        //Blue loses
        console.log("B-L");
        btlout.innerHTML += "Blue lost, "
    }
}

function rAttack() {
    let b = Math.floor(Math.random()*6)+1;
    let r = Math.floor(Math.random()*6)+1;

    if (b < r) {
        //Red wins
        console.log("R-W");
        btlout.innerHTML += "Red wins, "
    }
    else if (b >= r) {
        //Red loses
        console.log("R-L");
        btlout.innerHTML += "Red lost, "
    }
}

