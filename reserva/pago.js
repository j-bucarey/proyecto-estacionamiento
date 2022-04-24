const cuenta = document.getElementById("numero-cuenta")
const fecha = document.getElementById("fecha-expiracion")
const cvv = document.getElementById("cvv")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(cuenta.value.length <16){
        warnings += `El numero de la tarjeta es incorrecto <br>`
        entrar = true
    }
    if(fecha.value.length < 5){
        warnings += `La fecha no es valida <br>`
        entrar = true
    }
    if(cvv.value.length < 3){
        warnings += `El CVV no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Pago exitosamente"
    }
})