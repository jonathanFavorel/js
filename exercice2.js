const readlineSync = require('readline-sync');

// Exercice 1 : Qui est le plus grand ?
console.log("Exercice 1 : Qui est le plus grand ?");
let nombresExercice1 = [];
for (let i = 0; i < 3; i++) {
  let nombre = parseFloat(readlineSync.question(`Entrez le nombre ${i + 1}: `));
  nombresExercice1.push(nombre);
}
let maxExercice1 = Math.max(...nombresExercice1);
console.log(`Le plus grand nombre est : ${maxExercice1}`);

// Exercice 2 : Le prof
console.log("\nExercice 2 : Le prof");
let note = parseFloat(readlineSync.question("Entrez la note de l'élève (entre 0 et 20) : "));
if (note >= 0 && note <= 4) {
  console.log("Catastrophique, il faut tout revoir");
} else if (note >= 5 && note <= 10) {
  console.log("Insuffisant");
} else if (note >= 11 && note <= 14) {
  console.log("Peut mieux faire");
} else if (note >= 15 && note <= 17) {
  console.log("Bien");
} else if (note >= 18 && note <= 20) {
  console.log("Excellent, bon travail");
} else {
  console.log("Note invalide, veuillez entrer une note entre 0 et 20.");
}

// Exercice 3 : Somme
console.log("\nExercice 3 : Somme");
let N = parseInt(readlineSync.question("Entrez un nombre N : "));
let somme = 0;
for (let i = 1; i <= N; i++) {
  somme += i;
}
console.log(`La somme des nombres de 1 à ${N} est : ${somme}`);

// Exercice 4 : Escalier
console.log("\nExercice 4 : Escalier");
let nombreEscalier = parseInt(readlineSync.question("Entrez un nombre pour l'escalier : "));
for (let i = 1; i <= nombreEscalier; i++) {
  console.log('*'.repeat(i));
}

// Exercice 5 : Drôle de pyramide
console.log("\nExercice 5 : Drôle de pyramide");
for (let i = 1; i <= nombreEscalier; i++) {
  console.log('*'.repeat(i));
}
for (let i = nombreEscalier - 1; i >= 1; i--) {
  console.log('*'.repeat(i));
}

// Exercice 6 : Une vraie pyramide
console.log("\nExercice 6 : Une vraie pyramide");
for (let i = 1; i <= nombreEscalier; i++) {
  console.log(' '.repeat(nombreEscalier - i) + '*'.repeat(2 * i - 1));
}
