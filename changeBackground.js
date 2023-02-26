const button=document.getElementById("btn");
const body=document.body;

colors=["#87CEEB","white","orange","green","yellow","purple","blue","black","red"]

button.addEventListener('click',changeBackground)

body.style.backgroundColor=colors[0]

function changeBackground(){

    const colorsIndex=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorsIndex];
}