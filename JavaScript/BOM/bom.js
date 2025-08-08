//!window
console.log(window);

//!alert()
let bom1= ()=>{
    alert("DONT GO THERE💀")
}

//!confirm()
let bom2= ()=>{
    confirm("DO YOU REALLY LOVE ME?")
}

//!combining alert and comfirm()
let bom3= ()=>{
    let output=confirm("DO YOU REALLY LOVE ME?")
    if(output)
    {
        alert("THANKYOU FOR CONFIRMING")
    }
    else{
        alert("GET LOST")
    }
}

//!prompt()
let bom4= ()=>{
    let num1=Number(prompt("Enter a number"))
    let num2=Number(prompt("Enter another number"))
    console.log(num1+num2)
    
}

//!open()
let a
let bom5= ()=>{
    a=open("https://chatgpt.com/")
}

//!close
let bom6= ()=>{
    a.close()
}

// //!sessionStorage
// sessionStorage.setItem("name", "Rohith")
// console.log(sessionStorage.getItem("name"));





//!History Object
let bom7= ()=>{
    history.forward()
}

let bom8= ()=>{
    history.back()
}

let bom9= ()=>{
    history.go(2)
}

let bom10= ()=>{
    history.go(-4)
}



//@LOCATION OBJECT
console.log(location.href);
//!RELOAD()
let bom11= ()=>{
    location.reload()
}

//!ASSIGN()
let bom12= ()=>{
    location.assign("https://www.hotstar.com/in/onboarding/profile?ref=%2Fin%2Fhome")
}

//!REPLACE()
let bom13= ()=>{
    location.replace("https://chatgpt.com/")
}

//!NAVIGATOR OBJECT
//To know the latitude and longitude values
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    
})




