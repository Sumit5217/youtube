//function sum(x,y){
  //  console.log(x+y);

//}

//sum(2,4);

//arrow function//
//const arrowSum = (a,b) =>{
  //  console.log(a+b);
//}
//arrowSum(3,6);

function countVowels(str) {
    let count = 0;
    for (const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
            count++;
        }
    }

    console.log(count);
}

