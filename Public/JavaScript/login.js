const nombre = document.getElementById("name")
 const password = document.getElementById("password")
 const form = document.getElementById("form")
 const parrafo = document.getElementById("warnings")

 form.addEventListener("submit", e=>{
     e.preventDefault()
    let warnings = ""
    let entrar = false
     parrafo.innerHTML = ""

     if(nombre.value.length < 6){
        warnings +=`El nombre no es valido <br> <br>`
       entrar = true
     }
    if(password.value.length < 8){
        warnings +=`La contraseña no es valida,  tiene que tener al menos 8 caracteres <br>`
        entrar = true
     }
    if(entrar){
         parrafo.innerHTML= warnings
    }else {
        if (nombre.value.length >6 && password.value.length >=8) {
            window.location.href = "index.html";
         } 
 }
 }
 )