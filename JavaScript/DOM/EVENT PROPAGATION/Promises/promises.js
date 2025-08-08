// let p=new Promise((resolve,reject)=>{
//     let meet=true;
//     if(meet){
//          resolve("Promise got fullfilled")
//     }
//     else{
//         reject("Promise got rejected")
//     }
// })
// console.log(p);
// console.log(typeof p);

// p.then((res)=>{
//     console.log(res+" Lets go inside and have something");
    
// })
// p.catch((err)=>{
//     console.log(err+" Sorry guys I was busy");
    
// })
// console.log(p);
// console.log(typeof p);


// let data=fetch("https://fakestoreapi.com/products")
// console.log(data);
// data.then((res)=>{
//     return res.json()
// }).then((res)=>{
//     console.log(res); 
// })


let fetchData1=async()=>{
    let data=await fetch("https://fakestoreapi.com/products")
    let finalData=await data.json()
    console.log(finalData);
}
fetchData1()


