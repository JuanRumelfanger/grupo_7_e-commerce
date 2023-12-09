window.onload = function(){
    let icon = document.querySelector('#logo');
    let icon2 = document.querySelector('#icon-user');
    let login = document.querySelector('.link-header-login-header');
    let register = document.querySelector('.link-header-register-header');
    let navBar = document.querySelector('form')
    if(innerWidth < 500){
        icon2.addEventListener('click', function(){
            console.log('yes')
            let visibilityIcon = window.getComputedStyle(icon).getPropertyValue('visibility');
            if(visibilityIcon === "hidden" && innerWidth <= 400){
                icon.style.visibility = "visible"
            }else if(innerWidth <= 400){
                icon.style.visibility = "hidden"
            }
            let visibilityLogin = window.getComputedStyle(login).getPropertyValue('visibility');
            if(visibilityLogin === "hidden"){
                login.style.visibility = "visible"
            }else{
                login.style.visibility = "hidden"
            }
            let visibilityRegister = window.getComputedStyle(register).getPropertyValue('visibility');
            if(visibilityRegister === "hidden"){
                register.style.visibility = "visible"
            }else{
                register.style.visibility = "hidden"
            }
            let color = window.getComputedStyle(icon2).getPropertyValue('color');
            if(color === "rgb(255, 255, 255)"){
                icon2.style.color = "rgb(128, 128, 128)"
            }else if(color === "rgb(128, 128, 128)"){
                icon2.style.color = "rgb(255, 255, 255)"
            }
        
    })

    }
    else if(innerWidth <= 760 &&  innerWidth >= 640){
        icon2.addEventListener('click', function(){
            console.log('yes')
            let visibilityNavBar = window.getComputedStyle(navBar).getPropertyValue('visibility');
            if(visibilityNavBar === "hidden"){
                navBar.style.visibility = "visible"
            }else{
                navBar.style.visibility = "hidden"
            }
            let visibilityLogin = window.getComputedStyle(login).getPropertyValue('visibility');
            if(visibilityLogin === "hidden"){
                login.style.visibility = "visible"
            }else{
                login.style.visibility = "hidden"
            }
            let visibilityRegister = window.getComputedStyle(register).getPropertyValue('visibility');
            if(visibilityRegister === "hidden"){
                register.style.visibility = "visible"
            }else{
                register.style.visibility = "hidden"
            }
            let color = window.getComputedStyle(icon2).getPropertyValue('color');
            if(color === "rgb(255, 255, 255)"){
                icon2.style.color = "rgb(128, 128, 128)"
            }else if(color === "rgb(128, 128, 128)"){
                icon2.style.color = "rgb(255, 255, 255)"
            }
        
    })
    }
}