const auraName = document.getElementById("auraName");
const auraRarity = document.getElementById("auraRarity");
const auraBio = document.getElementById("auraBio");
const auraSelector = document.getElementById("auraSelect");


let auras = [];
fetch("allauras.json")
.then(response => response.json())
.then( data => { auras = data; })
.catch(error => console.error(error));


auraSelector.addEventListener("change", function() {
const auraSelected = parseInt(auraSelector.value);
auraName.textContent = "Name: " + auras[auraSelected]["name"];
auraRarity.textContent = "Rarity: " + auras[auraSelected]["rarity"];
auraBio.textContent = "Descrpition: " + auras[auraSelected]["bio"];
});



const audioPlayer = document.getElementById("audioPlayer");
const moonlightSong = document.getElementById("moonlightSong");
let Playing = false;


audioPlayer.addEventListener("click", function() {
  if (!Playing) {
  moonlightSong.play();
  Playing = true;
  } else {
  moonlightSong.pause();
  Playing = false;
  }
});
