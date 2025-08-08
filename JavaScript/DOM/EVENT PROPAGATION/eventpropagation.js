let outer=document.getElementById("outer")
let inner=document.getElementById("inner")

// outer.addEventListener("click",()=>{
//     alert("This is outer");
// })

// inner.addEventListener("click",()=>{
//     alert("This is inner");
// })

//!Event Bubbling Phase
// outer.addEventListener("click",()=>{
//     alert("This is outer");
// },false)
// inner.addEventListener("click",()=>{
//     alert("This is inner");
// },false)

//!Event Capturing Phase
// outer.addEventListener("click",()=>{
//     alert("This is outer");
// },true)
// inner.addEventListener("click",()=>{
//     alert("This is inner");
// },true)

//!stopPropagation
outer.addEventListener("click",()=>{
    alert("This is outer");
},false)
inner.addEventListener("click",(e)=>{
    console.log(e);
    alert("This is inner");
    e.stopPropagation()
},false)
