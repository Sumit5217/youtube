var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click',function(){

    var valueX = Math.random()*100
    var rotate = Math.random()*360
    var valueY = Math.random()*100


    var img = document.createElement('img')
    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkL-jSIp2FUVBGmJTHECbThELGSKvz48k-8HlECuXe3UWLLNjzHqBmnXsaOl98gMoHMU&usqp=CAU')
    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvvOaISUK12P7S2kTUhVau3vG2o6vZy5xV28yG7f4wWiEW5PgW3KXw8CBCnlGOcLr_cg&usqp=CAU')
    img.style.height = '100px'
    img.style.position = 'absolute'
    img.style.left = valueX + '%'
    img.style.top = valueY + '%'
    img.style.rotate = rotate + 'deg'

    body.appendChild(img)
})