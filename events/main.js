// document
//   .getElementById("formularioRegistro")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formularioHtml = event.target;
//     const formulario = new FormData(formularioHtml);
//     const dataFormulario = Object.fromEntries(formulario);

//     if (dataFormulario.apellidos?.trim() == "") {
//       alert("Se requieren los apellidos");
//       return;
//     }

//     document.getElementById("impresora").innerHTML = `
//       <p>Nombres ${dataFormulario.nombres}</p>
//       <p>Apellidos ${dataFormulario.apellidos}</p>
//       <p>Correo ${dataFormulario.correo}</p>
//       <p>Genero ${dataFormulario.genero}</p>
//       <p>Dirección ${dataFormulario.direccion}</p>
//       <p>ciudad ${dataFormulario.ciudad}</p>
//       `;

//     console.log(dataFormulario);
//   });

// Impresión lista de usuarios y busqueda activa
const usuarios = [
  {
    id: 1,
    nombre: "Camila",
    apellido: "Rodríguez",
    email: "camila.rodriguez@example.com",
    edad: 28,
    ciudad: "Bogotá",
    rol: "admin",
    activo: true,
  },
  {
    id: 2,
    nombre: "Santiago",
    apellido: "Gómez",
    email: "santiago.gomez@example.com",
    edad: 34,
    ciudad: "Medellín",
    rol: "editor",
    activo: true,
  },
  {
    id: 3,
    nombre: "Valentina",
    apellido: "Martínez",
    email: "valentina.martinez@example.com",
    edad: 22,
    ciudad: "Cali",
    rol: "usuario",
    activo: false,
  },
  {
    id: 4,
    nombre: "Mateo",
    apellido: "López",
    email: "mateo.lopez@example.com",
    edad: 41,
    ciudad: "Barranquilla",
    rol: "usuario",
    activo: true,
  },
  {
    id: 5,
    nombre: "Isabella",
    apellido: "Hernández",
    email: "isabella.hernandez@example.com",
    edad: 30,
    ciudad: "Cartagena",
    rol: "editor",
    activo: true,
  },
  {
    id: 6,
    nombre: "Sebastián",
    apellido: "García",
    email: "sebastian.garcia@example.com",
    edad: 26,
    ciudad: "Bucaramanga",
    rol: "usuario",
    activo: true,
  },
  {
    id: 7,
    nombre: "Mariana",
    apellido: "Pérez",
    email: "mariana.perez@example.com",
    edad: 37,
    ciudad: "Tunja",
    rol: "admin",
    activo: false,
  },
  {
    id: 8,
    nombre: "Nicolás",
    apellido: "Sánchez",
    email: "nicolas.sanchez@example.com",
    edad: 29,
    ciudad: "Duitama",
    rol: "usuario",
    activo: true,
  },
  {
    id: 9,
    nombre: "Daniela",
    apellido: "Ramírez",
    email: "daniela.ramirez@example.com",
    edad: 24,
    ciudad: "Sogamoso",
    rol: "usuario",
    activo: true,
  },
  {
    id: 10,
    nombre: "Alejandro",
    apellido: "Torres",
    email: "alejandro.torres@example.com",
    edad: 45,
    ciudad: "Pereira",
    rol: "editor",
    activo: true,
  },
  {
    id: 11,
    nombre: "Sofía",
    apellido: "Díaz",
    email: "sofia.diaz@example.com",
    edad: 31,
    ciudad: "Manizales",
    rol: "usuario",
    activo: false,
  },
  {
    id: 12,
    nombre: "Samuel",
    apellido: "Vargas",
    email: "samuel.vargas@example.com",
    edad: 27,
    ciudad: "Armenia",
    rol: "usuario",
    activo: true,
  },
  {
    id: 13,
    nombre: "Gabriela",
    apellido: "Castro",
    email: "gabriela.castro@example.com",
    edad: 33,
    ciudad: "Ibagué",
    rol: "editor",
    activo: true,
  },
  {
    id: 14,
    nombre: "Tomás",
    apellido: "Moreno",
    email: "tomas.moreno@example.com",
    edad: 39,
    ciudad: "Villavicencio",
    rol: "admin",
    activo: true,
  },
  {
    id: 15,
    nombre: "Luciana",
    apellido: "Rojas",
    email: "luciana.rojas@example.com",
    edad: 21,
    ciudad: "Neiva",
    rol: "usuario",
    activo: true,
  },
  {
    id: 16,
    nombre: "Emiliano",
    apellido: "Jiménez",
    email: "emiliano.jimenez@example.com",
    edad: 36,
    ciudad: "Pasto",
    rol: "usuario",
    activo: false,
  },
  {
    id: 17,
    nombre: "Antonella",
    apellido: "Ruiz",
    email: "antonella.ruiz@example.com",
    edad: 25,
    ciudad: "Popayán",
    rol: "usuario",
    activo: true,
  },
  {
    id: 18,
    nombre: "Martín",
    apellido: "Herrera",
    email: "martin.herrera@example.com",
    edad: 42,
    ciudad: "Santa Marta",
    rol: "editor",
    activo: true,
  },
  {
    id: 19,
    nombre: "Valeria",
    apellido: "Medina",
    email: "valeria.medina@example.com",
    edad: 29,
    ciudad: "Montería",
    rol: "usuario",
    activo: true,
  },
  {
    id: 20,
    nombre: "Joaquín",
    apellido: "Aguilar",
    email: "joaquin.aguilar@example.com",
    edad: 32,
    ciudad: "Cúcuta",
    rol: "usuario",
    activo: true,
  },
  {
    id: 21,
    nombre: "Sara",
    apellido: "Ortiz",
    email: "sara.ortiz@example.com",
    edad: 23,
    ciudad: "Yopal",
    rol: "usuario",
    activo: false,
  },
  {
    id: 22,
    nombre: "Lucas",
    apellido: "Mendoza",
    email: "lucas.mendoza@example.com",
    edad: 38,
    ciudad: "Bogotá",
    rol: "admin",
    activo: true,
  },
  {
    id: 23,
    nombre: "Paula",
    apellido: "Silva",
    email: "paula.silva@example.com",
    edad: 27,
    ciudad: "Medellín",
    rol: "editor",
    activo: true,
  },
  {
    id: 24,
    nombre: "Diego",
    apellido: "Romero",
    email: "diego.romero@example.com",
    edad: 44,
    ciudad: "Cali",
    rol: "usuario",
    activo: true,
  },
  {
    id: 25,
    nombre: "Natalia",
    apellido: "Suárez",
    email: "natalia.suarez@example.com",
    edad: 35,
    ciudad: "Barranquilla",
    rol: "usuario",
    activo: false,
  },
  {
    id: 26,
    nombre: "Andrés",
    apellido: "Navarro",
    email: "andres.navarro@example.com",
    edad: 26,
    ciudad: "Cartagena",
    rol: "usuario",
    activo: true,
  },
  {
    id: 27,
    nombre: "Laura",
    apellido: "Ríos",
    email: "laura.rios@example.com",
    edad: 30,
    ciudad: "Bucaramanga",
    rol: "editor",
    activo: true,
  },
  {
    id: 28,
    nombre: "Felipe",
    apellido: "Cárdenas",
    email: "felipe.cardenas@example.com",
    edad: 47,
    ciudad: "Tunja",
    rol: "usuario",
    activo: true,
  },
  {
    id: 29,
    nombre: "Juliana",
    apellido: "Pineda",
    email: "juliana.pineda@example.com",
    edad: 22,
    ciudad: "Duitama",
    rol: "usuario",
    activo: true,
  },
  {
    id: 30,
    nombre: "David",
    apellido: "Molina",
    email: "david.molina@example.com",
    edad: 33,
    ciudad: "Sogamoso",
    rol: "admin",
    activo: false,
  },
  {
    id: 31,
    nombre: "Manuela",
    apellido: "Arias",
    email: "manuela.arias@example.com",
    edad: 28,
    ciudad: "Pereira",
    rol: "usuario",
    activo: true,
  },
  {
    id: 32,
    nombre: "Juan",
    apellido: "Castillo",
    email: "juan.castillo@example.com",
    edad: 40,
    ciudad: "Manizales",
    rol: "editor",
    activo: true,
  },
  {
    id: 33,
    nombre: "Ana",
    apellido: "Guerrero",
    email: "ana.guerrero@example.com",
    edad: 36,
    ciudad: "Armenia",
    rol: "usuario",
    activo: true,
  },
  {
    id: 34,
    nombre: "Gabriel",
    apellido: "Ospina",
    email: "gabriel.ospina@example.com",
    edad: 24,
    ciudad: "Ibagué",
    rol: "usuario",
    activo: false,
  },
  {
    id: 35,
    nombre: "Carolina",
    apellido: "Restrepo",
    email: "carolina.restrepo@example.com",
    edad: 31,
    ciudad: "Villavicencio",
    rol: "usuario",
    activo: true,
  },
  {
    id: 36,
    nombre: "Esteban",
    apellido: "Salazar",
    email: "esteban.salazar@example.com",
    edad: 29,
    ciudad: "Neiva",
    rol: "editor",
    activo: true,
  },
  {
    id: 37,
    nombre: "María",
    apellido: "Quintero",
    email: "maria.quintero@example.com",
    edad: 43,
    ciudad: "Pasto",
    rol: "admin",
    activo: true,
  },
  {
    id: 38,
    nombre: "Julián",
    apellido: "Valencia",
    email: "julian.valencia@example.com",
    edad: 27,
    ciudad: "Popayán",
    rol: "usuario",
    activo: true,
  },
  {
    id: 39,
    nombre: "Andrea",
    apellido: "Mejía",
    email: "andrea.mejia@example.com",
    edad: 34,
    ciudad: "Santa Marta",
    rol: "usuario",
    activo: false,
  },
  {
    id: 40,
    nombre: "Ricardo",
    apellido: "Zapata",
    email: "ricardo.zapata@example.com",
    edad: 50,
    ciudad: "Montería",
    rol: "editor",
    activo: true,
  },
  {
    id: 41,
    nombre: "Catalina",
    apellido: "Acosta",
    email: "catalina.acosta@example.com",
    edad: 25,
    ciudad: "Cúcuta",
    rol: "usuario",
    activo: true,
  },
  {
    id: 42,
    nombre: "Óscar",
    apellido: "Bermúdez",
    email: "oscar.bermudez@example.com",
    edad: 39,
    ciudad: "Yopal",
    rol: "usuario",
    activo: true,
  },
  {
    id: 43,
    nombre: "Lina",
    apellido: "Cortés",
    email: "lina.cortes@example.com",
    edad: 32,
    ciudad: "Bogotá",
    rol: "usuario",
    activo: true,
  },
  {
    id: 44,
    nombre: "Camilo",
    apellido: "Parra",
    email: "camilo.parra@example.com",
    edad: 28,
    ciudad: "Medellín",
    rol: "admin",
    activo: true,
  },
  {
    id: 45,
    nombre: "Diana",
    apellido: "Londoño",
    email: "diana.londono@example.com",
    edad: 37,
    ciudad: "Cali",
    rol: "editor",
    activo: false,
  },
  {
    id: 46,
    nombre: "Jorge",
    apellido: "Franco",
    email: "jorge.franco@example.com",
    edad: 46,
    ciudad: "Barranquilla",
    rol: "usuario",
    activo: true,
  },
  {
    id: 47,
    nombre: "Melissa",
    apellido: "Osorio",
    email: "melissa.osorio@example.com",
    edad: 23,
    ciudad: "Cartagena",
    rol: "usuario",
    activo: true,
  },
  {
    id: 48,
    nombre: "Kevin",
    apellido: "Duarte",
    email: "kevin.duarte@example.com",
    edad: 30,
    ciudad: "Bucaramanga",
    rol: "usuario",
    activo: true,
  },
  {
    id: 49,
    nombre: "Tatiana",
    apellido: "Becerra",
    email: "tatiana.becerra@example.com",
    edad: 35,
    ciudad: "Tunja",
    rol: "editor",
    activo: true,
  },
  {
    id: 50,
    nombre: "Fernando",
    apellido: "Reyes",
    email: "fernando.reyes@example.com",
    edad: 41,
    ciudad: "Duitama",
    rol: "usuario",
    activo: false,
  },
];
document.getElementById("impresora").innerHTML =
  `Cantidad de usuarios: ${usuarios.length}`;
for (const user of usuarios) {
  document.getElementById("impresora").innerHTML += `
  <p>=============================</p>
  <div>
    <p>Identificador ${user.id}</p>
    <p>Nombre ${user.nombre}</p>
    <p>Apellido ${user.apellido}</p>
    <p>Email ${user.email}</p>
    <p>Edad ${user.edad}</p>
    <p>Ciudad ${user.ciudad}</p>
    <p>Rol ${user.rol}</p>
    <p>Estado ${user.activo ? "Activo" : "Inactivo"}</p>
  </div>
  `;
}

document
  .getElementById("buscadorActivo")
  .addEventListener("input", (evento) => {
    document.getElementById("impresora").innerHTML = "";
    const valorABuscar = evento.target.value?.toLowerCase().trim();
    const findUsers = usuarios.filter(
      (user) =>
        user.nombre?.toLowerCase().trim().includes(valorABuscar) ||
        user.apellido?.toLowerCase().trim().includes(valorABuscar) ||
        user.email?.toLowerCase().trim().includes(valorABuscar),
    );
    document.getElementById("impresora").innerHTML =
      `Cantidad de usuarios: ${findUsers.length}`;
    for (const user of findUsers) {
      document.getElementById("impresora").innerHTML += `
        <p>=============================</p>
        <div>
          <p>Identificador ${user.id}</p>
          <p>Nombre ${user.nombre}</p>
          <p>Apellido ${user.apellido}</p>
          <p>Email ${user.email}</p>
          <p>Edad ${user.edad}</p>
          <p>Ciudad ${user.ciudad}</p>
          <p>Rol ${user.rol}</p>
          <p>Estado ${user.activo ? "Activo" : "Inactivo"}</p>
        </div>
        `;
    }
  });
