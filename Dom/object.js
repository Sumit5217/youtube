var freiends = [{
    user:'harsh',
    age:20,
    weight: 78
},{
    user:'shivam',
    age:24,
    weight: 98


},{
    user:'aman',
    age:30,
    weight: 88

}]

var sum = 0
 freiends.forEach(function(elem){
    sum = sum + elem.weight

 })

 if (sum<300){
    console.log("you are capable for lift");
 }else{
    console.log("not capable");
 }
