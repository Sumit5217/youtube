var arr = ["amit","sumit","jatin"]

var sum = ''

arr.forEach(function(elem){
    sum += '<div class = "main">
        <h1>${elem}</h1>
        <h3>26 march,2023</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo tempore qui temporibus assumenda non. Quasi!</p>
    </div>'

})

var body = document.querySelector('body')

body.innerHTML = sum
