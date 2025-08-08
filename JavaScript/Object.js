//CREATION OF OBJECT
//1) LITERAL WAY
// let bioData1={
//     name:"Pavan",
//     age:25,
//     isMarried:false,
//     exGirlFriend:undefined,
//     kids:null,
//     skills:["Singing","Dancing","Batsman"],
//     fun:()=>{
//         console.log("CORE JAVA TRAINER")
//     },
//     place:{
//         area:"Chaitanyapuri",
//         state:"Telangana"
//     },
// };

// //2) CONSTRUCTOR OBJECT
// let bioData2=new Object();
// bioData2.name="Monty";
// bioData2.age=27;
// bioData2.isMarried=true;
// bioData2.exGirlFriend=undefined;
// bioData2.kids=null;
// bioData2.skills=["Singing","Dancing","Actor"];
// bioData2.fun=()=>{
//     console.log("PYTHON TRIANER");
//   };
// bioData2.place={
//     area:"Dilsukhnagar",
//     state:"Telangana"
//  };


//  //ACCESSING THE PROPERTIES OF AN OBJECT
//  //1)DOT NOTATION
//  console.log(bioData1.name)
//  console.log(bioData2.skills)
//  bioData1.fun()
//  console.log(bioData2.place.area)

//  //2)BOX NOTATION
//  console.log(bioData1["name"])
//  console.log(bioData2['skills'])
//  bioData1["fun"]()
//  console.log(bioData2["place"]["area"])

 
 //METHODS
//  let simpleObj={
//     name:"Someone",
//     age:18,
//     place:"Somewhere"
//  }

//  //1)Object.keys(obj)
//  console.log(Object.keys(simpleObj))

//  //2)Object.values(obj)
//  console.log(Object.values(simpleObj))

//  //3)Object.entries(obj)
//  console.log(Object.entries(simpleObj))

//  //4)Object.fromEntries(nestedArray)
//  let nestedArray=[
//     ["name","XYZ"],
//     ["age",20],
//     ["place","Hyd"]
//  ]

//  let str="SMILE"
//  console.log(Object.fromEntries(nestedArray))

// //5)Object.assign(target,source)
// let movieDetails={
//    movieName:"Salaar",
//    hero:"Prabhas",
//    heroine:"Shruthi Hasan"
// }
// let target={
//    yearOfRelease:2023
// }

// //OBJECT TO OBJECT
// Object.assign(target,movieDetails)
// console.log(target)

// //STRING TO OBJECT
// let str="Lenovo"
// let strObj={}
// Object.assign(strObj,str)
// console.log(strObj)

//ARRAY TO OBJECT
let arr=["Something","Nothing","Everything","Anything","thing"]
let arrObj={}
Object.assign(arrObj,arr)
console.log(arrObj)





//6)Object.seal(obj)
let details1={
   name:"Abc",
   age:30,
   place:"Chaitanyapuri"
}
console.log(details1)
Object.seal(details1)
//Add(NOT POSSIBLE)
details1.PINCODE=500036
console.log(details1)
//Modify(POSSIBLE)
details1.age=25
console.log(details1)
//Delete(NOT POSSIBLE)
delete details1.place
console.log(details1)

//7)Object.freeze(obj)
let details2={
   name:"Xyz",
   age:15,
   place:"Dilsukhnagar"
}
console.log(details2)
Object.freeze(details2)
//Add(NOT POSSIBLE)
details2.PINCODE=500036
console.log(details2)
//Modify(POSSIBLE)
details2.age=25
console.log(details2)
//Delete(NOT POSSIBLE)
delete details2.place
console.log(details2)