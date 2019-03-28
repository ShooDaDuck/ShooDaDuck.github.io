const Beetle = document.getElementById("Beetle");
const divPoints = document.getElementById("divPoints");
const sound = document.getElementById("sound");

const pete = document.getElementById("pete");
const garry = document.getElementById("garry");
const eric = document.getElementById("eric");
const kkk = document.getElementById("kkk");

const peteP = document.getElementById("peteP");
const garryP = document.getElementById("garryP");
const ericP = document.getElementById("ericP");
const kkkP = document.getElementById("kkkP");

const bpsOut = document.getElementById("bpsOut");

let soundList = ["sounds/2 inch long dude.mp3", "sounds/Beetle juice party.mp3", "sounds/Cant dress like a woman.mp3", "sounds/Do it with a female.mp3", "sounds/Drinking smoking have weed.mp3", "sounds/I was born in 1975.mp3", "sounds/Im a king.mp3", "sounds/Im from Vietnam brotha.mp3", "sounds/My name is Beetlejuice.mp3", "sounds/Wassup honey.mp3"];
let points = 0;
let bps = 0;

let kkkBuy = 1488;
let ericBuy = 149;
let garryBuy = 40;
let peteBuy = 10;


gameLoop();

Beetle.onclick = function () {
    poke();
    beetleSpeak();
    points += 1;
};
//funksjoner som styrer hvor mye oppgraderingene koster gir og hvor mye prisen øker med
kkk.onclick = function () {
    if (points >= kkkBuy){
        points -= kkkBuy;
        kkkBuy *= 1.1;
        bps += 420;
    }
};

eric.onclick = function () {
    if (points >= ericBuy){
        points -= ericBuy;
        ericBuy *= 1.01;
        bps += 20;
    }
};

garry.onclick = function () {
    if (points >= garryBuy){
        points -= garryBuy;
        garryBuy *= 1.01;
        bps += 1;
    }
};

pete.onclick = function () {
    if (points >= peteBuy){
        points -= peteBuy;
        peteBuy *= 1.01;
        bps += 0.1;
    }
};
//en gameloop hvor verdiene blir oppdatert 60 ganger i sekundet
function gameLoop() {
    timedPoints();
    requestAnimationFrame(gameLoop);
    peteP.innerHTML = `Price = ${peteBuy.toFixed(1)}`;
    garryP.innerHTML = `Price = ${garryBuy.toFixed(1)}`;
    ericP.innerHTML = `Price = ${ericBuy.toFixed(1)}`;
    kkkP.innerHTML = `Price = ${kkkBuy.toFixed(1)}`;
    bpsOut.innerHTML = `BP per second = ${bps.toFixed(1)}`
}
function timedPoints() {
    points += bps/60;
    divPoints.innerHTML = "=   " + points.toFixed(1);
}
//funksjon for å skifte bildet man trykker på for 200ms
function poke() {
    Beetle.src = "pictures/BeetleAngry.png";
    setTimeout(happy,200);
}
function happy() {
    Beetle.src = "pictures/BeetleHappy.png";
}
//funksjon som velger tilfelig lydfill fra Arrayen soundList
function beetleSpeak(){
    let number = Math.floor(Math.random() * soundList.length);
    sound.src = soundList[number];
    sound.play()
}
