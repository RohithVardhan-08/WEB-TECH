// //LITERAL WAY
// let str1='JavaScript'
// let str2="Hyderabad"
// console.log(str1)
// console.log(str2)
// console.log(typeof str1)
// console.log(typeof str2)


// //CONSTRUCTOR OBJECT
// let str3=new String("Something")
// console.log(str3)
// console.log(typeof str3)


// //STRING INTERPOLATION OR TEMPLATE STRING
// let firstName=`Virat`
// let lastName=`Kohli`
// let age=37
// console.log(`My name is ${firstName} ${lastName} and my age is ${age}`)
// console.log(typeof(firstName))

//ACCESSING THE CHARACTERS OF A STRING
/* let str="BIRYANI"
console.log(str[1])
console.log(str[3])
console.log(str[8])
console.log(str[-2])

//LENGTH
console.log(str.length)


//METHODS

//1)charAt(index)
let str1="MOBILE"
console.log(str1.charAt(4))
console.log(str1.charAt(-1))
console.log(str1.charAt(8))

//2)charCodeAt(index)
let str2="abc"
console.log(str2.charCodeAt(0))
console.log(str2.charCodeAt(2))

//3)toUpperCase()  and  toLowerCase()
let str3="SoMeThInG"
console.log(str3.toUpperCase())
console.log(str3.toLowerCase())

//4)repeat(count)
let str4="chai"
console.log(str4.repeat(4)) */

//5)concat(string,string,string)
let str5="HTML"
let st5="CSS"
let s5="js"
console.log(str5.concat(" ",st5," ",s5))

//6)replace(oldstring,newstring) and replaceAll(oldstring,newstring)
let str6="I LOVE YOU ONLY YOU"
console.log(str6.replace("YOU","MYSELF"))
console.log(str6.replaceAll("YOU","MYSELF"))

//7)split(sepaartor)
let str7="NAGACHAITANAYA😒SAMANTHA"
console.log(str7.split("😒"))
console.log(str7.split("H"))

//8)includes(searchstring,startIndex)
let str8="market"
console.log(str8.includes("a"))
console.log(str8.includes("z"))
console.log(str8.includes("r",-250))
console.log(str8.includes("r",0))
console.log(str8.includes("r",3))

//9)slice(startIndex,endIndex)
let str9="JAVASCRIPT"
console.log(str9.slice(2))
console.log(str9.slice(3,8))
console.log(str9.slice(-6,-3))
console.log(str9.slice(4,-1))
console.log(str9.slice(8,2))

//10)substring(startIndex,endIndex)
let str10="JAVASCRIPT"
console.log(str10.substring(2))
console.log(str10.substring(3,8))
console.log(str10.substring(-6,-3))
console.log(str10.substring(4,-1))
console.log(str10.substring(8,2))