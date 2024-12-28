var btn = document.querySelector('button')
var istatus = document.querySelector('h5')

var flag = 0

btn.addEventListener('click',function(){
    
    if(flag == 0){
        istatus.innerHTML = 'Friends'
        istatus.style.color = 'green'
        btn.innerHTML='remove freind'

        flag = 1
    }else{
        istatus.innerHTML = 'stranger'
        istatus.style.color = 'red'
        btn.innerHTML='Add freind'

        flag=0
    }
    
})