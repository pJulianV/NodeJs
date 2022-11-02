
function saludo(nombre){
    return "Hola " + nombre + " :>"
}

function suma(a,b){
    return a + b
}

function resta(a,b){ 
    return a - b
}

function multiplicacion(a,b){
    return a * b
}

let division = (a,b) => a/b

let objeto = () => ({id: 1, animal: "perro", nombre: "Tony"})

const data = [
    {
        animal: "Perro",
        nombre: "Rocky"
    },
    {
        animal: "Gato",
        nombre: "Roberto"
    },
]

let objdata = () => {(data)}

export {
    suma, resta, saludo, division, objeto, objdata
}

