const fs = require('fs');

let ListadoPorHacer = [];


const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    ListadoPorHacer.push(porHacer);

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return ListadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);


)


module.exports = {
    crear,
    getListado
}