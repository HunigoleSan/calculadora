const btn = document.querySelectorAll("button");
const display = document.querySelector("#igual");
const result = document.querySelector("#resultado")
const limpiarHtml = document.querySelector("#limpiar")
const recuperarDato = false
const resetear = false
var datos = "";

btn.forEach((btn)=>{
  btn.addEventListener("click", ()=>{

    let data = [1,2,6,1,2,5,9,'33','33'];
    
    let result = data.filter((item,index)=>{
      return data.indexOf(item) === index;
    })
    console.log(result);

    result.innerHTML += btn.textContent;
    datos = result.textContent
    datos.filter
    /* if (datos.includes("/")){
      console.log("entro al if")
      datos = datos.replace("/","/")
      console.log(datos)

    } */
    console.log(datos)
    
    console.log(btn.textContent);


  });
});

function reemplazarOperador(){

}


limpiarHtml.addEventListener('click', ()=>{
  resetearC(datos)
})
display.addEventListener("click", function() {
  let operacion = validarMultiplicacion(datos)
  
  if (operacion.includes("=")){

    datosReplace = operacion.replace("=","")
    console.log(datosReplace)
    result.innerHTML = eval(datosReplace)
    /* recuperarDato = true */
  }
  
  
});

function validarMultiplicacion(operacion){
  if (datos.includes("x")){
    datosReplace = datos.replace("x","*")
    console.log(datosReplace)
    return datosReplace
  }
  return operacion
}

function resetearC(datos){
  result.innerHTML = "";
  
}



