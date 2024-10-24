let element1=document.querySelector("h1");
element1.addEventListener("click",()=>{
    alert("hey man, are you mad pro");
    element1.style.cssText="background:blue; color:white"
});

let element2=document.querySelector("h2");
element2.addEventListener("mouseover",()=>{
    alert("hey man, are you are over the mouse");
    element2.style.cssText="background:yellow; color:blue"
});


let element3=document.querySelector("h3");
element3.addEventListener("mouseleave",()=>{
    alert("hey man, are you are leave the mouse");
    element3.style.cssText="background:blue; color:blue"
});


let element4=document.querySelector("h4");
element4.addEventListener("mouseenter",()=>{
    alert("hey man, are you are enter the mouse");
    element4.style.cssText="background:blue; color:blue"
});
let element5=document.querySelector("h5");
element5.addEventListener("mouseout",()=>{
    alert("hey man, are you are out the mouse");
    element5.style.cssText="background:blue; color:black"
});

let element36=document.querySelector("h6");
element6.addEventListener("mouseup",()=>{
    alert("hey man, are you are up the mouse");
    element6.style.cssText="background:yellow; color:blue"
});