//!Accessing the elements

//!Direct Access
// console.log(document.all);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.images);
// console.log(document.links);
// console.log(document.forms);

//!Indirect Access

//#1)getElementById()
// let h1=document.getElementById("heading")
// console.log(h1);
// h1.style.color="red"
// h1.style.backgroundColor="black"


// let button=document.getElementById("btn")
// console.dir(button);
// button.style.color="black"
// button.style.background="red"

//#2)getElementsByClassName()
// let image=document.getElementsByClassName("poster")
// console.log(image);

// for(let i=0; i<=image.length; i++)
// {
//     image[i].style.border="5px solid red"
//     image[i].style.borderRadius="50%"
    
// }

//#3)getElementsByTagName()
// let links=document.getElementsByTagName("a")
// console.log(links);
// for(let i=0; i<links.length; i++)
// {
//     links[i].style.color="green"
//     links[i].style.fontSize="35"
// }

//#4)getElementsByName()
// let fields=document.getElementsByName("inputs")
// console.log(fields);
// for(let i=0; i<fields.length; i++)
// {
//     fields[i].style.padding="10px"
//     fields[i].style.backgroundColor="maroon"
// }

//#5)querySelector()
//!ID
// let heading1=document.querySelector("#heading")
// console.log(heading1);
//!CLASS
// let poster1=document.querySelector(".poster")
// console.log(poster1);
//!TAGNAME
// let link1=document.querySelector("a")
// console.log(link1);

//#6)querySelectorAll()
//!ID
// let heading2=document.querySelectorAll("#heading")
// console.log(heading2);
//!CLASS
// let poster2=document.querySelectorAll(".poster")
// console.log(poster2);
//!TAGNAME
// let link2=document.querySelectorAll("a")
// console.log(link2);


//@write() and writeln()

//!write()
// document.write("Good Morning")
// document.write(<h1>WRITE METHOD</h1>)
//#Difference
// document.write("Hello")
// document.write("Stupid Fellows")

//!writeln()
// document.writeln("Good Morning")
// document.writeln(<h1>WRITE METHOD</h1>)
//#Difference
// document.writeln("Hello")
// document.writeln("Stupid Fellows")


//!Accessing the Text Content

// let para=document.getElementById('para')
// console.log(`innerText is:${para.innerText})`);
// console.log(`textContent is:${para.textContent})`);
// console.log(`innerHTML is:${para.innerHTML}`);

//!Setting the Text Content
// let section = document.querySelector("#container1")
// section.innerText="Hello from innerText"
// section.textContent="Hello from textContent"
// section.innerHTML=`<h1>Hello from innerHTML</h1>
// <p>This is sample para</p>
// <button>Click</button>
// `

//!Getting the attributes
// let h2=document.querySelector("h2")
//!getAttribute()
// console.log(h2.getAttribute("id"));
// console.log(h2.getAttribute("class"));
// console.log(h2.getAttribute("title"));
//!getAttributeNode()
// console.log(h2.getAttributeNode("id"));
// console.log(h2.getAttributeNode("class"));
// console.log(h2.getAttributeNode("title"));

//!createElement()
// let h1Tag=document.createElement("h1")
// let pTag=document.createElement("p")
// let btnTag=document.createElement("button")
// console.log(h1Tag);
// console.log(pTag);
// console.log(btnTag);

//!createTextNode()
// let h1Text=document.createTextNode("This is H1 Text")
// let pText=document.createTextNode("This is Para Text")
// let btnText=document.createTextNode("Click")
// console.log(h1Text);
// console.log(pText);
// console.log(btnText);

//!createComment()
// let comment=document.createComment("This is a sample comment")
// console.log(comment);

//!appendChild() and append()
//@appendChild()
// h1Tag.appendChild(h1Text)
// pTag.appendChild(pText)
// btnTag.appendChild(btnText)

//@append()
// h1Tag.append(h1Text, pText, btnText)
// pTag.append(pText)
// btnTag.append(btnText)

//!Displaying content on UI
// let body=document.body
// body.append(h1Tag, pTag, btnTag)

//!childNodes and children
// let mother=document.body
// console.log(mother.childNodes);
// console.log(mother.children);

//!insertBefore()
// let body=document.body
// let h1Tag=body.children[0]
// let pTag=body.children[1]
// let btnTag=body.children[2]
// body.insertBefore(btnTag,h1Tag)
// body.insertBefore(pTag,h1Tag)
// body.insertBefore(h1Tag,btnTag)

//!replaceChild() 
let replaceOperation=()=>{
    let hospital=document.getElementById("hospital")
    let Raj=document.getElementById("toBeReplaced")
    let Bantu=document.createElement("li")
    Bantu.innerText="Bantu"
    hospital.replaceChild(Bantu,Raj)
}

//!removeChild()
let removeOperation=()=>{
    let hospital=document.getElementById("hospital")
    let nurse=document.getElementById("toBeDeadSoon")
    hospital.removeChild(nurse)
}



















