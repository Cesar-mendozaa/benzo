function logear() {
    
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if (user == "21540071" && pass == "cesarmendoza") {
        
        window.location = "index.php";

        if (user == "21540069" && pass == "jdtorres") {
        
            window.location = "index.html";

            if (user == "21540068" && pass == "marcoantonio") {
            
                window.location = "index.html";
            }
        }
    }

    else {
        alert("Datos incorrectos");
    }

}