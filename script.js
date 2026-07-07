const nao = document.getElementById("nao");

function fugir(){

let largura = window.innerWidth - 150;
let altura = window.innerHeight - 80;

let x = Math.random()*largura;
let y = Math.random()*altura;

nao.style.left = x+"px";
nao.style.top = y+"px";

}

nao.addEventListener("mouseover", fugir);

nao.addEventListener("touchstart", function(e){
e.preventDefault();
fugir();
});

document.getElementById("sim").onclick=function(){

document.body.innerHTML=`

<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#ff4f81;color:white;text-align:center;padding:30px;">

<div>

<h1>❤️ ELA DISSE SIM ❤️</h1>

<h2>Agora oficialmente somos um casal!</h2>

<p>

Teté...

Obrigado por existir.

Você trouxe felicidade para minha vida.

Prometo cuidar de você, te apoiar e construir muitos momentos lindos ao seu lado.

Eu te amo! ❤️

</p>

</div>

</div>

`;

}