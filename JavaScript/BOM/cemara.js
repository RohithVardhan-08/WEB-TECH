let video=document.querySelector("video")

navigator.mediaDevices.getUserMedia({video:true}).then((str)=>{
    video.srcObject=str
}) 