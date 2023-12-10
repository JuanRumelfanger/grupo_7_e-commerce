window.onload = function(){
    let icon = document.querySelector('#logo');
    let products = document.querySelector('#productsText');
    let icon2 = document.querySelector('#icon-user');
    let login = document.querySelector('.link-header-login-header');
    let register = document.querySelector('.link-header-register-header');
    if(innerWidth < 525){
        icon2.addEventListener('click', function(e){
            let visibilityProducts = window.getComputedStyle(products).getPropertyValue('visibility')
            if(visibilityProducts === "hidden"){
                products.style.visibility = "visible"
            }else{
                products.style.visibility = "hidden"
            }
            let visibilityIcon = window.getComputedStyle(icon).getPropertyValue('visibility');
            if(visibilityIcon === "hidden"){
                icon.style.visibility = "visible"
            }else{
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
}