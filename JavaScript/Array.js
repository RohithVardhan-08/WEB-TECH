// //Literal way
// let frontendSub=["HTML","css","Js","React"]
// let details=["Ramesh",21,false]
// console.log(frontendSub)
// console.log(typeof frontendSub)
// console.log(details)
// console.log(typeof details)

// //Constructor object
// let recentMovies=new Array(4)
// recentMovies[0]="hit3"
// recentMovies[1]="shubham"
// recentMovies[2]="#single"
// recentMovies[3]="court"
// recentMovies[4]="chaava"
// console.log(recentMovies)

// //ACCESSING THE ELEMENTS OF AN ARRAY
// let chickenItems=["65","Biryani","Butter masala","Mandi"]
//  console.log(chickenItems[2])
//  console.log(chickenItems[3])
//  console.log(chickenItems[5])
//  console.log(chickenItems[-1])

//  //length
//  console.log(chickenItems)

//  //MULTIDIMENTION OR NESTED ARRAY
//  let trainer=[
//     ["Monty","Python",27],
//     ["Pavan","Core java",25],
//     ["yasin","Sql",28]
//  ]
//  console.log(trainer[1][2])
//  console.log(trainer[2][1])
//  console.log(trainer[0][1])



// //ADDING OD DELETING THE ELEMENTS AT STATING OR ENDING OF HTE ARRAY
// let snacks= ["Samosa","Egg Puff"]
// console.log(snacks)

// //PUSH()
// snacks.push("Chips","Punugulu")
// console.log(snacks)

// //POP()
// snacks.pop()
// console.log(snacks)

// //UNSHIFT()
// snacks.unshift("Pani Puri","French Fries")
// console.log(snacks)

// //SHIFT()
// snacks.shift()
// console.log(snacks)

// //1)toStrong()
// let arr1=["Marker","Charger","Remote","Laptop"]
// console.log(arr1.toString())
// console.log(typeof arr1.toString())

// //2)concat(...arr)
// let frontend=["Html","Css","Js","React"]
// let backend=["Java","Python"]
// let database=["Sql"]
// let fullstack=[]
// console.log(fullstack.concat(frontend,backend,database))

// //3)join(Seperator)
// let arr3=["RCB","SRH","DC","PBSK","GT"]
// console.log(arr3.join("😊"))
// console.log(arr3.join(" "))
// console.log(typeof arr3.join())

// //4)flat(depthValue)
// let arr4=[1,2,3,[4,5,[6,7,[8,[9,[10,[11]]]]]]]
// console.log(arr4.flat())
// console.log(arr4.flat(2))
// console.log(arr4.flat(Infinity))

// //5)at(index)
// let arr5=["65","Biryani","Butter Masala","Mandi"]
// console.log(arr5.at(3))
// console.log(arr5.at(1))
// console.log(arr5.at(4))
// console.log(arr5.at(-2))

// //6)slice(startIndex,endIndex)
// let arr6=["Mansion House","Magic Moments","OakSmith","Blenders Pride","Teachers"]
// console.log(arr6.slice(2))
// console.log(arr6.slice(1,4))
// console.log(arr6.slice(-3,-1))
// console.log(arr6.slice(0,-2))
// console.log(arr6.slice(4,0))

// //7)includes(searchElement,startIndex)
// let arr7=["Chicken Pakoda","Mango Pickle","Omlet","Fish Fry","Crispy Corn"]
// console.log(arr7.includes("Omlet"))
// console.log(arr7.includes("Soya Sticks"))
// console.log(arr7.includes("Mango Pickle",1))
// console.log(arr7.includes("Mango Pickle",2))
// console.log(arr7.includes("Fish Fry",-4))

// //8)reverse()
// let arr8=["Curd Rice","Biryani","Dal Rice","Pulav"]
// console.log(arr8.reverse())

// //9)sort()
// let arr9=[5,2,7,1,4,3,10,30,15]
// console.log(arr9.sort())

//10)splice(startIndex,deleteCount,ElementToBeAdded)
// let arr10=["Icecream","GulabJamun","DoubleKaMeeta"]
// //EX:1
// // arr10.splice(1,1,"KajuKatli")
// // console.log(arr10)
// //Ex:2
// // arr10.splice(0,2,"EggPuff")
// // console.log(arr10)
// //Ex:3
// // arr10.splice(2,0,"Samosa","PaniPuri","Kachori")
// // console.log(arr10)
// //Ex:4
// // arr10.splice(-2,2,"Apricot Delight")
// // console.log(arr10)
// //Ex:5
// arr10.splice(100,0,"Kunafa")
// console.log(arr10)


// ARRAY HIGHER ORDER METHODS

//1)forEach(fn(element,index,array))
//EXAMPLE:1
// let arr1=["Monty","Pavan","Asnan"]
// arr1.forEach((element,index,array)=>{
//     console.log(element+" "+"Sir")
//     console.log(index)
//     console.log(array)
// }
// )

//Example2
// let arr2=[1,2,3,4,5,6,7,8,9,10]
// arr2.forEach((ele,ind,arr)=>{
//     console.log(`2*${ele}=${2*ele}`)
//     console.log(ind)
//     console.log(arr)
// }
// )

//2)map(frn(element,index,array))

//Example:1
// let prices=[429,99,125,200]
// prices.map(
//     (ele,ind,arr)=>{
//         console.log(ele*0.1)
//     }
// )

//Example:2
// let mulOf2=[1,2,3]
// let mapOutput=mulOf2.map((ele,ind,arr)=>{
//     return(`2*${ele}=${2*ele}`)
// }
// )
// console.log(mapOutput)

//3)filter(fn(element,index,array))
// let arr3= [50,70,60,95,40]
// let filterOutput= arr3.filter((element,index,array)=>{
//     return element>50
// })
// console.log(filterOutput)

// //4)some(fn(element,index,array))
// let arr4=[1,7,3,0,2]
// let someOutput= arr4.some((element)=>{
//     return element>3
// })
// console.log(someOutput)

// //5)every(fn(element,index,array))
// let arr5=[1,7,3,0,2]
// let everyOutput= arr5.every((element)=>{
//     return element>3
// })
// console.log(everyOutput)

//6)reduce(fn(accumulator,element,index,array),initialValue)
let arr6=[1,2,3,4,5]
let sum=0;
for(let i=0; i<arr6.length; i++){
    sum+=arr6[i]
}
console.log(sum)

let reducedOutput=arr6.reduce((sum,ele,ind,arr)=>{
    return sum+=ele
},0)
console.log(reducedOutput)