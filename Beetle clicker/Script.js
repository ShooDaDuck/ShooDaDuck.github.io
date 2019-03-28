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

const openUpgrades = document.getElementById("openUpgrades");
const exitUpgrades = document.getElementById("exitUpgrades");

let soundList = ["sounds/2 inch long dude.mp3", "sounds/Beetle juice party.mp3", "sounds/Cant dress like a woman.mp3", "sounds/Do it with a female.mp3", "sounds/Drinking smoking have weed.mp3", "sounds/I was born in 1975.mp3", "sounds/Im a king.mp3", "sounds/Im from Vietnam brotha.mp3", "sounds/My name is Beetlejuice.mp3", "sounds/Wassup honey.mp3"];
let points = 0;
let bps = 0;

let kkkBuy = 1488;
let kkkN = 0;
let ericBuy = 149;
let ericN = 0;
let garryBuy = 40;
let garryN = 0;
let peteBuy = 10;
let peteN = 0;


gameLoop();

Beetle.onclick = function () {
    poke();
    beetleSpeak();
    points += 1;
};

openUpgrades.onclick = function () {
    document.getElementById("upgradesTab").style.width = "400px"; //bringer oppgraderingstabben ut
};
exitUpgrades.onclick = function () {
    document.getElementById("upgradesTab").style.width = "0";//fjerner oppgraderingstabben fra siden
};
//funksjoner som styrer hvor mye oppgraderingene koster gir og hvor mye prisen øker med
kkk.onclick = function () {
    if (points >= kkkBuy){//sjekker at du har nokk poeng til å kjøpe
        points -= kkkBuy; // treker fra prisen til oppgraderingen
        kkkBuy *= 1.1;  // skalerer prisen til oppgraderingen etter hvert kjøp
        bps += 420; // hvor mye bp oppgraderingen legger til i sekundet
        kkkN++ //lagrer hvor mange ganger oppgraderingen har blitt kjøpt, blir brukt til å vise fremm hvor mye bps oppgraderingen produserer i total.
    }
};

eric.onclick = function () {
    if (points >= ericBuy){
        points -= ericBuy;
        ericBuy *= 1.01;
        bps += 20;
        ericN++
    }
};

garry.onclick = function () {
    if (points >= garryBuy){
        points -= garryBuy;
        garryBuy *= 1.01;
        bps += 1;
        garryN++
    }
};

pete.onclick = function () {
    if (points >= peteBuy){
        points -= peteBuy;
        peteBuy *= 1.01;
        bps += 0.1;
        peteN++
    }
};
//en gameloop hvor verdiene blir oppdatert 60 ganger i sekundet og prisene til oppgraderingene blir oppdatert
function gameLoop() {
    timedPoints();
    requestAnimationFrame(gameLoop);
    peteP.innerHTML = `Price = ${peteBuy.toFixed(1)}  Producing: ${0.1*peteN} bps`;
    garryP.innerHTML = `Price = ${garryBuy.toFixed(1)}  Producing: ${1*garryN} bps`;
    ericP.innerHTML = `Price = ${ericBuy.toFixed(1)}  Producing: ${20*ericN} bps`;
    kkkP.innerHTML = `Price = ${kkkBuy.toFixed(1)}  Producing: ${420*kkkN} bps`;
    bpsOut.innerHTML = `BP per second = ${bps.toFixed(1)}`
}
function timedPoints() {
    points += bps/60; //gjør at bps verdien ikke blir lagt til 60 ganger i sekundet ved å dele bps på 60 som gjør at bps sin verdi blir lagt til hvert sekundet istede
    divPoints.innerHTML = "=   " + points.toFixed(1); // viser poengene dine
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
    sound.play();
    console.log(soundList[number])
}
