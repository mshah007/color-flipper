let bgcolors=["green","red","blue","yellow","orange","purple","pink","brown","black","white"];
let btn=document.querySelector("#btn");
let body=document.body;
btn.addEventListener("click",changeColor);

function changeColor(){
    let randomNumber=Math.floor(Math.random()*bgcolors.length);
    body.style.backgroundColor=bgcolors[randomNumber];
}       
