var arr = [
    {
        dp:'https://images.unsplash.com/photo-1732492211739-16eea9575e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://plus.unsplash.com/premium_photo-1726876906074-8c68f867b0ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
        username:'stylish Amit'
    },
    {
        dp:'https://images.unsplash.com/photo-1733077151673-c834c5613bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D',
        username:'the devil'
    },
    {
        dp:'https://images.unsplash.com/photo-1734192209674-e38b0eb4ff1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734366965580-a60e03ae8a17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        username:'marco len'
    },
    {
        dp:'https://images.unsplash.com/photo-1734534015529-31a65c29880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734366965512-0f7ec347ab36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D',
        username:'stebin'
    },
    {
        dp:'https://images.unsplash.com/photo-1720048171527-208cb3e93192?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1732221560326-f6c8cb063e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D',
        username:'jack denny'
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1731607051748-620edac3fb60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
        username:'sunny singh'
    },
]


var sum = ''

arr.forEach(function(elem,idx){
    sum = sum + ` <div class="story">
                <img id =${idx} src="${elem.dp}" alt="">
            </div>`
    
})

var storiyan = document.querySelector('.storiyan')
var full = document.querySelector('#full')
var fullUser = document.querySelector('#full h2')

var growth = document.querySelector('#growth')

storiyan.innerHTML = sum


storiyan.addEventListener('click',function(dets){

    var grow = 0
    var gold = arr[dets.target.id]

    var int = setInterval(function(){
        grow++
        growth.style.width = grow+"%"
    },30)

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`

    fullUser.innerHTML = gold.username

    setTimeout(function(){

        full.style.display = 'none'
        clearInterval(int)
    },3000)

    

})
