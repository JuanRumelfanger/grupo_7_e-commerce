/* Validaciones register*/

let formulario = document.querySelector("form.form-container");
let inputName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");

//Validaciones del nombre y apellido

inputName.addEventListener("input", (e) => {
  if (inputName.value.length < 3) {
    inputName.style.borderColor = "Red";
  } else {
    inputName.style.borderColor = "Blue";
  }
});

lastName.addEventListener("input", (e) => {
  if (lastName.value.length < 3) {
    lastName.style.borderColor = "Red";
    lastName.innerHTML += "<sub>" + "Ingrese mas de 2 letras" + "</sub>";
  } else {
    lastName.style.borderColor = "Blue";
  }
});

//Validaciones del email
let formatoEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
email.addEventListener("input", (e) => {
  fetch("http://localhost:3000/api/users")
    .then((response) => response.json())
    .then((user) => {   
      let usuarios = user.data;
      console.log(email.value);
      //console.log(usuarios);
      if (formatoEmail.test(email.value) === true) {
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].email === email.value) {
            email.style.borderColor = "Red";
            console.log("Este correo ya esta registrado");
            break
          } else {
            email.style.borderColor = "Blue";
          }
        }
      } else {
        email.style.borderColor = "Red";
      }
    });
});
