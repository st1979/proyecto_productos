function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value
    let precio_ingresado = document.getElementById("precio").value
    let stock_ingresado = document.getElementById("stock").value
    let imagen_ingresado = document.getElementById("imagen").value

    console.log(nombre_ingresado+" "+precio_ingresado );

    let enviar_producto = {
        nombre: nombre_ingresado,
        precio: precio_ingresado,
        stock: stock_ingresado,
        imagen: imagen_ingresado
        
    }
    console.log(enviar_producto);
    
    let url = "http://localhost:5000/registro"
    var options = {
        body: JSON.stringify(enviar_producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./productos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}