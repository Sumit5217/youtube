var moveX = 0
var moveY = 0

var img = document.querySelector('img')

document.addEventListener('keydown',function(dets){
    if(dets.code == 'ArrowRight'){
        moveX++
        img.style.left = moveX + '%'
        
    }else if(dets.code == 'ArrowLeft'){
        moveX--
        img.style.left = moveX + '%'

    }else if(dets.code == 'ArrowUp'){
        moveY++
        img.style.bottom = moveY + '%'

    }else if(dets.code == 'ArrowDown'){
        
        moveY--
        img.style.bottom= moveY + '%'
    
    }

    else{
        console.log('other clicked')
    }
})