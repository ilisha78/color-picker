let box=document.getElementById("box");
let inp=document.getElementById("color");
inp.addEventListener("input", function(){
    // const selectedColor = this.value;
    // box.style.backgroundColor = selectedColor;
    box.style.backgroundColor=inp.value;//my code (thinking)
})
//my thought to loop each element and change the bgclr using id value
let a= document.querySelectorAll(".circle");
// console.log(a);
a.forEach((e)=>{
    e.addEventListener("click",()=>{
        let b=e.getAttribute("id");
        // console.log(b);
        box.style.backgroundColor= b;
    })
})
//try to check every thing is good or not
// document.getElementById("red").addEventListener("click", function(){
//     box.style.backgroundColor="red";
// })
// document.getElementById("yellow").addEventListener("click", function(){
//     box.style.backgroundColor="yellow";
// })
// document.getElementById("blue").addEventListener("click", function(){
//     box.style.backgroundColor="blue";
// })
// document.getElementById("green").addEventListener("click", function(){
//     box.style.backgroundColor="green";
// })
// document.getElementById("purple").addEventListener("click", function(){
//     box.style.backgroundColor="purple";
// })
// document.getElementById("pink").addEventListener("click", function(){
//     box.style.backgroundColor="pink";
// })