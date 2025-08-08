// //setTimeout(function,time)
// setTimeout(()=>{
//     console.log("DAD, Wake up adn Attend the Meeting");
    
// },1000)

// //setInterval(function,time)
// setInterval(()=>{
//     document.writeln("<h1>Nana, Thondaraga levandi</h1>")
// },2000)

// //clearInterval
// let count=0;
// let meeting=setInterval(()=>{
//     document.writeln("<h1>Nana, Thondaraga levandi</h1>")
//     count++;
//     if(count==5){
//         clearInterval(meeting)
//         document.writeln("<h1>ENOUGH, STOP IT </h1>")
//     }
// },1500)

//clearTimeout
setTimeout(()=>{
    clearTimeout(KillHim)
    document.writeln("<h1> Rahul is good</h1>")
},3000)
let KillHim=setTimeout(()=>{
    document.writeln("<h1>Shoot at Rahul</h1>")
},5000)