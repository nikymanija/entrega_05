
console.log(document);

console.log(document.head)

console.log(document.body)

console.log(document.getElementById("getelementByid"))
console.log(document.getElementsByClassName("clasName"))
console.log(document.getElementsByTagName("p"))


let autos = document.getElementsByClassName("autos")
   console.log("Se llaman a los Autos")
console.log(autos[0].innerHTML)
console.log(autos[1].innerHTML)


console.log("Se llaman las etiquetas del metodo getElementByTagname")
let contenedores = document.getElementsByTagName("div")

console.log(`Este es el concesionario y dentro estan los autos${contenedores[0].innerHTML}`)

console.log(`Esta div de auto [1]${contenedores[1].innerHTML} esta dentro de la div concesionario `)
console.log(`Esta div de auto [2]${contenedores[2].innerHTML} esta dentro de la div concesionario `)

function cambiarTexto(){
let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
titulo.innerText="Presionaste el botón te felicito"
console.log(titulo.innerText)
}

let container = document.getElementById("vacio")
container.innerHTML = "<h2>Creado Con innerHtml </h2>"
container.className="texto-creado-js"


let saludoFinal = document.createElement("h1")
saludoFinal.innerText ="Hasta la próxima"
document.body.append(saludoFinal)
let divVacio = document.getElementById("vacio")
let eliminarAlgo = () => divVacio.remove()



function mostrarValores(){
    let modelo = document.getElementById("modelo").value
    let auto = document.getElementById("auto").value
    document.getElementById("datos").innerText=
    `La marca del auto agregado es ${auto} y su modelo es el año ${parseInt(modelo)}`
 
}



