window.onload = function(){
    let informationBoxes = document.querySelectorAll('.information-box')
    let products = document.querySelectorAll('.product')
    let imgs = document.querySelectorAll('img')
    console.log(informationBoxes)
    if(innerWidth < 303){
        console.log('a')
        informationBoxes.forEach(function(box) {
            box.style.visibility = "hidden";
            
        })    
        products.forEach(function(p, i){
            p.style.height = "240px"
            p.style.transition = "height 0.5s"
            p.addEventListener('mouseenter', function(){
                p.style.height = "360px"
            })
            p.addEventListener('transitionend', function(){
                if (p.style.height === '360px') {
                    informationBoxes[i].style.visibility = "visible";
                }
            })
            p.addEventListener('mouseleave', function(){
                p.style.height = "240px"  
                informationBoxes[i].style.visibility = "hidden";       
            })
            
        })

    }else if(innerWidth < 450 && innerWidth >= 303){
        informationBoxes.forEach(function(box) {
            box.style.visibility = "hidden";
            
        })    
        products.forEach(function(p, i){
            p.style.height = "240px"
            p.style.transition = "height 0.5s"
            p.addEventListener('mouseenter', function(){
                p.style.height = "330px"
            })
            p.addEventListener('transitionend', function(){
                if (p.style.height === '330px') {
                    informationBoxes[i].style.visibility = "visible";
                }
            })
            p.addEventListener('mouseleave', function(){
                p.style.height = "240px"  
                informationBoxes[i].style.visibility = "hidden";       
            })
            
        })
    }else if(innerWidth <= 450){
        imgs.forEach(function(img){
            img.addEventListener('mouseover', function(){
                img.style.width = "90%"
                img.style.height = "250px"
            })
            img.addEventListener('mouseout', function(){
                img.style.width = "80%"
                img.style.height = "200px"
            })
        })
    }
}