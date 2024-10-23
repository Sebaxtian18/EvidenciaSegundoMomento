//Base de datos simulada de usuarios
const usuarios = [{}]
//Base de datos simulada de los libros prestados a los usuarios
const librosPrestados = [{}]

//Función para registrar los usuarios de la biblioteca
function registrarse() {
    let nombre = document.getElementById('nombre').value
    let tipoDocumento = document.getElementById('tipoDocumento').value
    let documento = document.getElementById('documento').value
    let direccion = document.getElementById('direccion').value
    let telefono = document.getElementById('telefono').value
    let correo = document.getElementById('correo').value
    let contraseña = document.getElementById('contraseña').value
    let usuario = {
        nombre: nombre,
        tipoDocumento: tipoDocumento,
        documento: documento,
        direccion: direccion, 
        telefono: telefono,
        correo: correo,
        contraseña: contraseña
    }
    usuarios.push(usuario)
}

function prestarlibro() {
    let nombreTitulo = document.getElementById('tituloDelLibro').value    
    let fechaPrestamo = document.getElementById('fechaPrestamo').value    
    let fechaDevolucion = document.getElementById('fechaDevolucion').value    

    let libro = {
        nombreTitulo: nombreTitulo, 
        fechaDePrestamo: fechaPrestamo,
        fechaDevolocion: fechaDevolucion
    }
    librosPrestados.push(libro)

}

