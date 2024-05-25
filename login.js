function logear() {
    
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if (user == "David" && pass == "12345") {
        
        window.location = "index.html";

    }

    else {
        alert("Datos incorrectos");
    }

}