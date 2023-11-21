/* Validaciones login*/
let formDiv = document.querySelector(".conteiner-login");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let buttonLogin = document.querySelector("button");
console.log(formDiv);

let formatoEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
let errores = [];
let usuario;
email.addEventListener("input", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/api/users")
    .then((response) => response.json())
    .then((user) => {
      let usuarios = user.data;
      let usuarioEncontrado = false;
      if (formatoEmail.test(email.value) === true) {
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].email === email.value) {
            console.log("Cuenta encontrada");
            usuarioEncontrado = true;
            usuario = usuarios[i].password;
            return usuario;
          }
        }
        if (usuarioEncontrado == false) {
          errores.push("Este email no existe");
          //console.log("Email no encontrado");
        }
      } else {
        email.style.borderColor = "Red";
      }
    });
});
password.addEventListener("blur", (e) => {
  e.preventDefault();
  if (usuario === password.value) {
    console.log("constraseña correcta");
  } else {
    console.log("contraseña incorrecta");
    errores.push("Contraseña incorrecta");
  }
});

buttonLogin.addEventListener("click", (e)=>{
  e.preventDefault();  
  if (errores.length>0) {
    console.log('hola');
    formDiv.innerHTML = errores.forEach((error)=>{
      "<ol><li>"+error+"</li></ol>"
    })
  } else {
    
  }
  
})
