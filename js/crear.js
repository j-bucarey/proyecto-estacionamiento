
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 4){
        warnings += `Rellenar Campo <br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
        
    }else{
        parrafo.innerHTML = "¡Subido! "
        parrafo.innerHTML = "Tu publicacion ahora esta en revisión  "
    }
})
