/* Validaciones register*/

let email = document.querySelector('#email');

let formatoEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
email.addEventListener("input", (e) => {
  fetch("http://localhost:3000/api/users")
    .then((response) => response.json())
    .then((user) => {
      let usuarios = user.data;
      if (formatoEmail.test(email.value) === true) {
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].email === email.value) {
            break;
          } else {
            console.error("Este correo electronico no esta registrado");
          }
        }
      } else {
        email.style.borderColor = "Red";
      }
    });
}); 