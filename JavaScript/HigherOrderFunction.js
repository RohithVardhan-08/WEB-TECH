let add=(a,b)=>{
    return a+b
}
let sub=(a,b)=>{
    return a-b
}
let mul=(a,b)=>{
    return a*b
}
let calculator=(a,b,task)=>{
    return task(a,b)
}
console.log(calculator(20,20,add))
console.log(calculator(40,20,sub))
console.log(calculator(10,5,mul))