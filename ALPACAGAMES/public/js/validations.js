/* Validaciones register*/

let formulario = document.querySelector('form.form-container')
let inputName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')

//Validaciones del nombre y apellido

inputName.addEventListener('input', (e)=>{
    if(inputName.value.length<3){
        inputName.style.borderColor = 'Red'
        inputName.innerHTML += '<sub>'+'Ingrese mas de 2 letras'+'</sub>'
    }else{
        inputName.style.borderColor = 'Blue'
    }
})

lastName.addEventListener('input', (e)=>{
    if(lastName.value.length<3){
        lastName.style.borderColor = 'Red'
        lastName.innerHTML += '<sub>'+'Ingrese mas de 2 letras'+'</sub>'
    }else{
        lastName.style.borderColor = 'Blue'
    }
})

console.log(inputName);