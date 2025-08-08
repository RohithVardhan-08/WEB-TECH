// EXAMPLE  1

/*console.log("Start")
var a=10;
let b=20;
function anything()
{
    const c=30;
    console.log(a+b+c);
}
anything()
console.log("End")*/
//---------------------------------------------------------
//EXAMPLE 2
/*console.log("start")
function a()
{
    b()
    console.log("a function")
}
function b()
{
    c()
    console.log("b function")
}
function c()
{
    console.log("c function")
}
a() */
//---------------------------------------------------------------
//EXAMPLE 3
/*var msg="hello"
let num=574
function normal(){
    console.log(msg+" "+num)
}
let arrow=()=>
{
    var info1="yooo"
    const info2="yeah"
    console.log(info1+" "+info2)
}
arrow()
normal()*/
//--------------------------------------------------------------------
// EXAMPLE 4
console.log("started")
function outer()
{
    var a=10;
    let b=20;
    function inner()
    {
        const c=30;
        console.log(b+c);
    }
    inner()
}outer()


