const btn = document.querySelectorAll("button");
const display = document.querySelector("#igual");
const result = document.querySelector("#resultado")
const mensajeHtml = document.querySelector("#mensaje")
const limpiarHtml = document.querySelector("#limpiar")
const recuperarDato = false
const resetear = false
var datos = "";

btn.forEach((btn) => {
  btn.addEventListener("click", () => {

    result.innerHTML += btn.textContent;
    datos = result.textContent
    firtCaracter = datos.charAt(0)
    /*Esto falta mejorar*/
    validationFirstCaracterOperator(firtCaracter)

    


  });
});
function ValidationMultiplicityOfOperatorContinuous(cadena){
  let newChain = ""
  let ultimoCaracter =""
  for (let i = 0; i < cadena.length; i++) {
      let caracter = cadena.charAt(i);

      console.log("Linea 30:",caracter)
      if(caracter !== '/' && caracter !=='x' && caracter !=='+'&& caracter !=='-' && caracter !=='.'){
        console.log("Linea 32:",caracter)
        newChain += caracter
      }else{
          console.log("Linea 35:",caracter)
          /* ultimoCaracter = cadena.charAt(i+1) */
          if(caracter !== cadena.charAt(i+1)){
            if(caracter == '/' ||caracter == '+' || caracter == '-' || caracter === '.' || caracter === 'x'){
              console.log("No agrega: ", caracter)
          
            }else{
                newChain += caracter
            }
          }else{
              console.log("raro")
              /* newChain += caracter */
          }
      }
    }
    return newChain
  }

let cadena = "aa++///--bb"
let cadenaModificada = ValidationMultiplicityOfOperatorContinuous(cadena)
console.log("Cadena normal: ",cadena)
console.log("Cadena modificada: ", cadenaModificada)


function validationFirstCaracterOperator(firtCaracter){
  if (firtCaracter === '/' ||
  firtCaracter === 'x' ||
  firtCaracter === '-' ||
  firtCaracter === '+' ||
  firtCaracter === '.') {
  console.log("Entra en primer error")
  firtsValidationError = true
  mensajeHtml.innerHTML = 'Por favor debe iniciar con un operador'

}

}
limpiarHtml.addEventListener('click', () => {
  resetearC(datos)
})
function resetearC(datos) {
  result.innerHTML = "";

}

display.addEventListener("click", function () {
  let operacion = validarMultiplicacion(datos)

  if (operacion.includes("=")) {

    datosReplace = operacion.replace("=", "")
    console.log(datosReplace)
    result.innerHTML = eval(datosReplace)
    /* recuperarDato = true */
  }

});

function validarMultiplicacion(operacion) {
  if (datos.includes("x")) {
    datosReplace = datos.replace("x", "*")
    console.log(datosReplace)
    return datosReplace
  }
  return operacion
}




