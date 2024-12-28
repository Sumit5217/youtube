let jsonobj ={
    name: "sumit",
    friend: "aman",
    food: "bhindi"
}
console.log(jsonobj);
let myJsonstr = JSON.stringify(jsonobj);
console.log(myJsonstr);
 myJsonstr = myJsonstr.replace('sumit', 'amit');
 console.log(myJsonstr);