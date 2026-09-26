// write in english

// Import Node's built-in "readline" module. It lets us read text that the
// user types into the terminal (standard input) line by line.
const readline = require("node:readline");

// Create a readline "interface" connected to the keyboard (process.stdin)
// and the screen (process.stdout). This object (rl) is what we use to ask
// questions and receive answers in the console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// input(question): asks the user a question in the terminal and waits for
// their answer. It wraps rl.question in a Promise so we can use "await" and
// write the code in a clean, top-to-bottom style instead of nested callbacks.
// It returns the text the user typed.
function input(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// clearConsole(): wipes everything currently printed in the terminal so the
// next screen starts fresh. It is used to keep each menu/screen clean.
function clearConsole() {
  console.clear();
}

// attendanceList: the "database" of the program. It is an array kept in memory
// where every registered user is stored as an object. It starts empty and
// grows as users are added. (Note: it is lost when the program closes.)
const attendanceList = [];

// validateData(...): checks that the four values the user typed are correct.
// It collects every problem into an "errors" array, prints all of them if
// there is at least one, and returns a boolean:
//   - true  -> the data is valid
//   - false -> the data has errors (so the caller can ask again)
function validateData(name, document, contactNumber, email) {
  // Find out the data type of each value ("string", "number", etc.) so we can
  // confirm they are text before running text-specific checks on them.
  const typeName = typeof name;
  const typeDocument = typeof document;
  const typeContactNumber = typeof contactNumber;
  const typeEmail = typeof email;

  // Empty list that will hold a message for every rule the data breaks.
  const errors = [];

  if (typeName !== "string") {
    errors.push("El nombre debe ser una cadena de texto");
  }

  if (name.split(" ").length < 2) {
    errors.push("El nombre debe tener al menos dos palabras");
  }

  if (typeDocument !== "string") {
    errors.push("El documento debe ser una cadena de texto");
  }

  if (typeContactNumber !== "string") {
    errors.push("El número de contacto debe ser un número");
  }

  if (contactNumber.length !== 10) {
    errors.push("El número de contacto debe tener 10 dígitos");
  }

  if (typeEmail !== "string") {
    errors.push("El email debe ser una cadena de texto");
  }

  if (!email.includes("@")) {
    errors.push("El email no es válido");
  }

  // If we collected at least one error, print all of them and report failure.
  if (errors.length > 0) {
    console.log(
      "==================== SE ENCONTRARON INCONGRUENCIAS EN LOS DATOS ====================",
    );
    for (const error of errors) {
      console.log(`* ${error}`);
    }
    console.log(
      "=====================================================================================",
    );
    return false;
  }

  // No errors were found: the data is valid.
  return true;
}

// addUser(): registers a new user. It keeps asking for the four fields in a
// loop until validateData accepts them, then saves the user into
// attendanceList. It is "async" because it uses "await input(...)".
async function addUser() {
  clearConsole();
  // Prepare the variables that will hold the user's answers.
  let name = "";
  let document = "";
  let contactNumber = "";
  let email = "";
  // Ask for the data over and over until it passes validation.
  while (true) {
    name = await input("Ingrese el nombre: ");
    document = await input("Ingrese el documento: ");
    contactNumber = await input("Ingrese el número de contacto: ");
    email = await input("Ingrese el email: ");

    clearConsole();
    // Validate what was typed. If it is valid, leave the loop with "break".
    const validationUser = validateData(name, document, contactNumber, email);
    if (validationUser) {
      break;
    }
  }
  // Save the validated user as a new object at the end of the list.
  attendanceList.push({
    name,
    document,
    contactNumber,
    email,
  });
}

// exampleUser: a sample object that simply documents the shape (the "keys")
// every user in the list has. It is not used by the program's logic.
const exampleUser = {
  name: "Juan Perez",
  document: "1234567890",
  contactNumber: "1234567890",
  email: "juanperez@gmail.com",
};

// printAttendanceList(): shows every registered user on screen. If the list is
// empty it says so; otherwise it prints one line per user. At the end it waits
// for Enter so the user can read the list before the menu clears the screen.
async function printAttendanceList() {
  clearConsole();
  console.log("================================================");
  console.log("Lista de asistencia");
  console.log("================================================");
  if (attendanceList.length === 0) {
    console.log("No hay usuarios en la lista");
  } else {
    for (const user of attendanceList) {
      console.log(
        `${user.name} - ${user.document} - ${user.contactNumber} - ${user.email}`,
      );
    }
  }
  console.log("================================================");
  await input("Presione enter para continuar");
}

// printSearchUserByDocument(): asks for a document number and looks for a user
// whose document matches it. ".find" returns the first matching user, or
// "undefined" if none is found. It then prints the result and waits for Enter.
async function printSearchUserByDocument() {
  clearConsole();
  const documentWrite = await input("Ingrese el documento del usuario: ");
  const user = attendanceList.find(function (user) {
    return user.document === documentWrite;
  });
  if (user) {
    console.log(
      `Usuario encontrado: ${user.name} - ${user.document} - ${user.contactNumber} - ${user.email}`,
    );
  } else {
    console.log("Usuario no encontrado");
  }
  await input("Presione enter para continuar");
}

// printMenu(...): draws the main menu options. If the previous choice was not
// valid (isInvalidOption is true), it first shows a warning with that option so
// the user knows what went wrong before choosing again.
function printMenu(isInvalidOption, option) {
  if (isInvalidOption) {
    console.log(`La opción '${option}' ingresada no es válida`);
  }
  console.log("================================================");
  console.log("1. Ingresar usuario");
  console.log("2. Ver lista de usuarios");
  console.log("3. Buscar usuario por nombre");
  console.log("4. Salir");
  console.log("================================================");
}

// main(): the heart of the program. It runs an endless loop that shows the
// menu, reads the user's choice, and calls the matching function. It only ends
// when the user picks option 4 (which stops the whole process).
async function main() {
  // "option" stores the last choice; "isInvalidOption" remembers whether the
  // previous choice was wrong so the menu can show the warning.
  let option = "";
  let isInvalidOption = false;
  while (true) {
    printMenu(isInvalidOption, option);
    option = await input("Ingrese la opción: ");
    // Option 1: register a new user.
    if (option === "1") {
      await addUser();
      clearConsole();
      isInvalidOption = false;
      continue; // go back to the top of the loop (show the menu again)
    }
    // Option 2: show the full attendance list.
    if (option === "2") {
      await printAttendanceList();
      clearConsole();
      isInvalidOption = false;
      continue;
    }
    // Option 3: search for a user by their document number.
    if (option === "3") {
      await printSearchUserByDocument();
      clearConsole();
      isInvalidOption = false;
      continue;
    }
    // Option 4: exit the program immediately.
    if (option === "4") {
      process.exit(0);
    }
    // Anything else: mark the choice as invalid so the menu warns the user.
    if (option !== "1" && option !== "2" && option !== "3" && option !== "4") {
      isInvalidOption = true;
      clearConsole();
      continue;
    }
  }
}

// Start the program by calling main().
main();

/*
==================================================================
EXECUTION ORDER — STEP BY STEP (for students)
==================================================================

1. SETUP (runs once, top to bottom, before anything else):
   - Node loads the "readline" module.
   - "rl" is created to talk to the keyboard and the screen.
   - The helper functions (input, clearConsole, validateData, addUser,
     printAttendanceList, printSearchUserByDocument, printMenu, main) are
     DEFINED but NOT executed yet — defining a function does not run it.
   - "attendanceList" is created as an empty array.

2. THE PROGRAM STARTS:
   - The last line, main(), is called. This is the true entry point.

3. INSIDE main() — THE MAIN LOOP (repeats forever until you exit):
   a) printMenu() draws the menu (and a warning if the last choice was invalid).
   b) input() asks "Ingrese la opción:" and WAITS for the user to type + Enter.
   c) The value typed is compared against "1", "2", "3", "4":

      OPTION "1" -> addUser():
         - Asks for name, document, contact number, and email.
         - Calls validateData() to check them:
             * If invalid, it prints the errors and ASKS AGAIN (the while loop).
             * If valid, it saves the user into attendanceList and returns.

      OPTION "2" -> printAttendanceList():
         - Prints every user, or "no users" if the list is empty.
         - Waits for Enter before returning to the menu.

      OPTION "3" -> printSearchUserByDocument():
         - Asks for a document number and searches the list with .find().
         - Prints the user if found, or "not found" otherwise.
         - Waits for Enter before returning to the menu.

      OPTION "4" -> process.exit(0):
         - Stops the whole program. This is the ONLY normal way out.

      ANY OTHER TEXT:
         - Marks the choice as invalid so the menu shows a warning next time.

   d) "continue" jumps back to step (a) and the menu appears again.

4. KEY IDEAS TO REMEMBER:
   - "await" pauses the function until the user answers; the program does not
     freeze the computer, it simply waits for input.
   - "while (true)" means "repeat forever"; we only escape it with "break"
     (in addUser) or by ending the process (option 4 in main).
   - The data lives only in memory, so closing the program erases the list.
==================================================================
*/
