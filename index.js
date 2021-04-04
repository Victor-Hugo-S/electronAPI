alert('Bienvenido al sistema que consulta \nhttps://animechan.vercel.app \nmediante APIS\nUn anime que no conocia lo espera')
var cont = document.getElementById('contenido')
var bot = document.getElementById('peticion')
var nombre = document.getElementById('inputUsuario')
const opcion = document.getElementById('opcionbusqueda')
bot.addEventListener('click',realizarPeticion)
nombre.disabled = true

opcion.addEventListener('click', function(event) {
    console.log(event.target.value)
    switch (event.target.value) {
        case "random":
            nombre.disabled = true
            break;
        case "personaje":
            nombre.disabled = false
            nombre.placeholder = "Nombre del Personaje"
            break;
        default:
            break;
    }
})

function realizarPeticion() {
    cont.innerHTML = ""
    switch (opcion.value) {
        case "random":
            fetch('https://animechan.vercel.app/api/quotes')
                .then(res => {
                    res.json()
                        .then(resJSON =>{
                        console.log(resJSON)
                        mostrarRes(resJSON);
                })
            })
            alert('Consulto el siguiente API \n'+ 'https://animechan.vercel.app/api/quotes' +'\n El Cual hace una consulta random \n' +
                    'De la página animechan.vercel.app')
            break;
        case "personaje":
            if (nombre.value !="") {
                fetch('https://animechan.vercel.app/api/quotes/character?name='+nombre.value)
                .then(res => {
                    res.json()
                        .then(resJSON =>{
                        console.log(resJSON)
                        mostrarRes(resJSON);
                    })
                })
                alert('Consulto el siguiente API \n'+ 'https://animechan.vercel.app/api/quotes/character?name=nombreingresado' +
                    '\nEl Cual hace una consulta con el personaje en la pagina con el nombre del imput el cual se sustituye en el link \n' +
                    'De la página animechan.vercel.app')
            }else{
                var err = Error("Ingrese un Dato para hacer la consulta")
                alert(err)
                console.log(err)
            }

            break;
        default:
            break;
    }
}
function mostrarRes(respuestaJSON) {
    let anime = respuestaJSON.docs
    for(var i = 0;i < respuestaJSON.length; i++){
        anime = respuestaJSON[i]
        cont.innerHTML += "<tr><th scope=\"row\">"+ (i+1)+ "</th>"+
                        "<td>"+anime['anime']+"</td>"+
                        "<td>"+anime['character']+"</td>"+
                        "<td>"+anime['quote']+"</td>"+
                        "</tr>"
    }
}