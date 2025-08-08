//ANONYMOUS FUNCTION
//EXAMPLE 1
/*let anonymous1=function()
    {
         console.log("I am rohith")
    }
    anonymous1()*/

//EXAMPLE2
/*let anonymous2=function(val1,val2)
{
    return val1-val2;
}
console.log(anonymous2(20,10))*/



//ARROW FUNCTION
/*let greet=(msg)=>
{
    console.log(msg)
}
greet("Goog Evening")*/


//TYPES OF ARROW FUNCTIONS

//Explicit arrow function
/*let product1=(a,b)=>
{
    return a*b
}
console.log(product1(10,10))*/

//Implicit arrow function
/*let product2=(a,b)=>a*b
console.log(product2(10,10))*/


//BEHAVIOUR OF ARROW FUNCTION

//SingleParamenter
/*let singleParam=msg=>
{
    console.log(msg)
}
singleParam("Hello")*/

//NoParameter
/*let info =_=>
    {
       console.log("Javascript Classs started")
    }
    info()*/


//IMMEDIATE INVOKED FUNCTION EXPRESSION(IIFE)

//Normal
(function normal()
{
    console.log("Normal Function")
})
();

//Anonymous
(function(){
console.log("Anonymous Function")
})
();

//Arrow
(()=>{
    console.log("Arrow Fuction")
})
();