const miNombre = "Andrés Roa";
const miEdad = 25;
const carrear = "Lic Tecnología";
const semestre = 1;
const profesion = "Developer";

let esMayorEdad = "No";

if (miEdad >= 18) {
  esMayorEdad = "Sí";
}

console.log("==============================");
console.log(
  `====== ${miNombre.toUpperCase()} ¿Es mayor de edad? ${miEdad >= 18 ? "Sí" : "No"} ======`,
);
console.log(`====== ${miEdad} ======`);
console.log(`====== ${carrear.toUpperCase()} ======`);
console.log(`====== Semestre ${semestre} ======`);
console.log(`====== ${profesion.toUpperCase()} ======`);
console.log("==============================");
