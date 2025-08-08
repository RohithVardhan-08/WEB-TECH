/*
//GLOBELSCOPE
var a=10
let b=20
const c=30
// ACCESSING DIRECTLY
console.log(a)
console.log(b)
console.log(c)
// ACCESSING INSIDE OF FUNCTION
function any() {
console.log(a)
console.log(b)
console.log(c)
}
any() 
// ACCESSING INSIDE OF BLOCK
{
console.log(a)
console.log(b)
console.log(c)
}
*/

//LOCAL/FUNCTION SCOPE
/*
}
something()

//ACCESSING DIRECTLY
console.log(name1) //Uncaught ReferenceError: name1 is not defined
console.log(name2) //Uncaught ReferenceError: name1 is not defined
console.log(name3)  //Uncaught ReferenceError: name1 is not defined

//ACCESSING INSIDE BLOCK
{
console.log(name1)  //Uncaught ReferenceError: name1 is not defined
console.log(name2)  //Uncaught ReferenceError: name1 is not defined
console.log(name3)  //Uncaught ReferenceError: name1 is not defined
}*/


// BLOCK SCOPE

{
    var boy1="anil";
    let boy2="surya";
    const boy3="naveen";

    // ACCESSING INSIDE BLOCK
    /*console.log(boy1)
    console.log(boy2)
    console.log(boy3)*/
}

// ACCESSING DIRECTLY
/*
console.log(boy1)
console.log(boy2)
console.log(boy3)*/

// ACCESSING INSIDE BLOCK FUNCTION
function hi(){
console.log(boy1)
console.log(boy2)
console.log(boy3)
}
hi()
