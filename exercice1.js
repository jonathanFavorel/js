const prompt = require('prompt-sync')();

// Exercice 1 : Bienvenue
let nom = prompt("Entrez votre nom : ");
console.log(`Bienvenue ${nom} !`);

// Exercice 2 : 0 à 100
console.log("\nExercice 2 : 0 à 100");
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// Exercice 3 : Addition
console.log("\nExercice 3 : Addition");
let nombre1 = prompt("Entrez le premier nombre : ");
let nombre2 = prompt("Entrez le deuxième nombre : ");
let somme = parseInt(nombre1) + parseInt(nombre2);
console.log(`${nombre1} + ${nombre2} = ${somme}`);

// Exercice 4 : Club d'enfants
console.log("\nExercice 4 : Club d'enfants");
let age = prompt("Entrez l'âge de l'enfant : ");
if (age >= 12) {
  console.log("Cadet");
} else if (age >= 10) {
  console.log("Minime");
} else if (age >= 8) {
  console.log("Pupille");
} else {
  console.log("Poussin");
}

// Exercice 5 : Profit ou perte
console.log("\nExercice 5 : Profit ou perte");
let prixFabrication = prompt("Entrez le prix de fabrication : ");
let prixVente = prompt("Entrez le prix de vente : ");
if (prixFabrication > prixVente) {
  console.log("Perte");
} else if (prixFabrication < prixVente) {
  console.log("Profit");
} else {
  console.log("Ni profit ni perte");
}

// Exercice 6 : Pair ou impair
console.log("\nExercice 6 : Pair ou impair");
let nombrePairImpair = prompt("Entrez un nombre : ");
if (nombrePairImpair % 2 === 0) {
  console.log("Pair");
} else {
  console.log("Impair");
}

// Exercice 7 : Positif, négatif ou nul ?
console.log("\nExercice 7 : Positif, négatif ou nul ?");
let nombrePosNegNul = prompt("Entrez un nombre : ");
if (nombrePosNegNul > 0) {
  console.log("Positif");
} else if (nombrePosNegNul < 0) {
  console.log("Négatif");
} else {
  console.log("Nul");
}

// Exercice 8 : Table de multiplication
console.log("\nExercice 8 : Table de multiplication");
let nombreTable = prompt("Entrez un nombre pour afficher sa table de multiplication : ");
for (let i = 1; i <= 10; i++) {
  console.log(`${nombreTable} x ${i} = ${nombreTable * i}`);
}

// Exercice 9 : Somme du tableau
console.log("\nExercice 9 : Somme du tableau");
const sommeTableau = (tableau) => {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
};

// Exemple d'utilisation
let tableauExemple = [1, 2, 3, 4, 5];
console.log("La somme du tableau est : " + sommeTableau(tableauExemple));
