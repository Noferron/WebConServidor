const boton = document.getElementById("button");
const resultado= document.getElementById("resultado");

boton.addEventListener("click", ()=>{
    fetch("http://localhost:3000/saludo")
        .then((res)=>res.json())
            .then((data)=>{
                resultado.textContent = data.mensaje + "" + data.curso;
            })
})


//---------Segundo boton-------

const mensaje = document.getElementById("mensaje");
const logro = document.getElementById("logro");
const prueba= document.getElementById("prueba");

mensaje.addEventListener("click", ()=>{
    fetch("http://localhost:3000/inicio")
        .then((res)=>res.json())
            .then((data)=>{
                prueba.textContent = data.mensaje;
            })
})

logro.addEventListener("click", ()=>{
    fetch("http://localhost:3000/inicio")
        .then((res)=>res.json())
            .then((data)=>{
                prueba.textContent = data.logro;
            })
})


//Pediente de averiguar como funciona

/*let nuevoTexto="";
let texto=document.getElementById("texto");
let boton2 = document.getElementById("enviar");

boton2.addEventListener("click",function reescribir(){
    nuevoTexto=texto.value;
    fetch("http://localhost:3000/saludo")
        .then((res)=>res.json())
            .then((data)=>{
                texto.value = data.textArea;
            });
    
})*/