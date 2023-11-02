const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

let characters = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let character of starWarsCharacters){
  characters.push(character.name);
}
console.log(characters);



/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

let femaleCharacters = [];
for (let character of starWarsCharacters){
  if(character.gender === "female"){
    femaleCharacters.push(character);
  }
}
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  'blue-gray': []
}

console.log(eyeColor);

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/


for (character of starWarsCharacters){
  switch(character.eye_color){
    case "blue":
      eyeColor.blue.push(character);
      break;
    case "yellow":
      eyeColor.yellow.push(character);
      break;
    case "brown":
      eyeColor.brown.push(character);
      break;
    case "red":
      eyeColor.red.push(character);
      break;
    case "blue-gray":
      eyeColor['blue-gray'].push(character);
      break;
    default:
      console.log("Non riesco ad assegnare un colore degli occhi");
  }
}
console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass = 0;
let i = 0;



while (i < starWarsCharacters.length){
  crewMass += starWarsCharacters[i].mass;
  ++i;
}
console.log(`La massa totale dell'equipaggio è ${crewMass} kg.`)


/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

// Get a random integer number between a min and max value (downloaded from Javascript documentation page)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Reset the crew mass to try different values
crewMass = 0;
i = 0;
const minMass = getRandomIntInclusive(30, 45);
const maxMass = getRandomIntInclusive(70, 135);

// Sets random mass values for each member of the crew to test algorithm
for (character of starWarsCharacters){
  character.mass = getRandomIntInclusive(minMass, maxMass);
}

// Recalculate overall mass of the crew
while (i < starWarsCharacters.length){
  crewMass += starWarsCharacters[i].mass;
  ++i;
}
console.log(`La massa totale dell'equipaggio è ${crewMass} kg.`)

// Display a message depending on the value of crew mass
if (crewMass <= 1000){
  if (crewMass <= 900){
    if (crewMass <= 700){
      if (crewMass <= 500){
        console.log("Ship is under loaded")
      } else {
        console.log("Ship is half loaded");
      }
    } else {
      console.log("Warning: Load is over 700");
    }
  } else {
    console.log("Critical Load: Over 900");
  }
} else {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

const undefinedGender = "n/a";
const newGender = "robot";

for (character of starWarsCharacters){
  if (character.gender.toLowerCase() === undefinedGender){
    character.gender = newGender;
    console.log(`${character.name} is a robot`);
  }
}

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/

function checkEmpty(property){
  return 
}

for (female of femaleCharacters){
  let name = female.name;
  for (let i = 0; i < characters.length; ++i){
    if (name === characters[i]){
      delete characters[i];
    }
  }
}

characters.splice(4, 1);
characters.splice(5, 1);
console.log(characters);



/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

let index = getRandomIntInclusive(0, starWarsCharacters.length-1);
let selectedCharacter = starWarsCharacters[index];

console.log(`${selectedCharacter.name} è un personaggio della saga di Star Wars. E' alto ${selectedCharacter.height} cm e pesa ${selectedCharacter.mass} kg. Tra le sue fattezze, ritroviamo capelli di colore ${selectedCharacter.hair_color}, pelle di color ${selectedCharacter.skin_color} e occhi di colore ${selectedCharacter.eye_color}. ${selectedCharacter.name} è di genere ${selectedCharacter.gender} ed è nato in data stellare ${selectedCharacter.birth_year}.`);