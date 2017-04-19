window.addEventListener("load",function() {

  var body=document.getElementById("body");

for (var i = 0; i<=1; i++){
  var contenedorPadre=document.createElement("div");
  var contHijo = document.createElement("div");
  var contHijito = document.createElement("div");

  contenedorPadre.setAttribute("class","padre");
  contHijo.setAttribute("class","hijo");
  contHijito.setAttribute("class","hijito");

  contHijo.appendChild(contHijito);
  contenedorPadre.appendChild(contHijo);
  body.appendChild(contenedorPadre);
};

  var padre= document.getElementsByClassName('padre');
  var hijo = document.getElementsByClassName('hijo');
  var hijito=document.getElementsByClassName("hijito");

  padre[0].style.background="red";
  hijo[0].style.background="purple";
  hijito[0].style.background="yellow";


  padre[1].style.background="blue";
  hijo[1].style.background="green";
  hijito[1].style.background="black";
  hijito[1].style.position="relative";
  hijito[1].style.top="-50px";
  hijito[1].style.left="-50px";



});
