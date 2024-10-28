//Base de datos simulada de los libros prestados a los usuarios
const librosPrestados = [{
    nombreTitulo: 'Las aventuras de Ralf',
    fechaPrestamo: '2024-10-06',
    fechaLimiteDevolucion: '2024-10-13',
    nombreUsuario:'rafael',
    tipoDocumento: 'CC',
    documento: '102655632',
    direccion: 'cl 25 # 34c - 12',
    telefono: 3152364512,
    correo: 'correo@correo.com'
}]

function prestarlibro() {
    let nombreTitulo = document.getElementById('tituloDelLibro').value    
    let fechaPrestamo = document.getElementById('fechaPrestamo').value    
    let fechaLimiteDevolucion = document.getElementById('fechaDevolucion').value
    let nombreUsuario = document.getElementById('nombreUsuario').value
    let tipoDocumento = document.getElementById('tipoDocumento').value
    let documento = document.getElementById('documento').value
    let direccion = document.getElementById('direccion').value
    let telefono = document.getElementById('telefono').value
    let correo = document.getElementById('correo').value    

    let libro = {
        nombreTitulo: nombreTitulo, 
        fechaDePrestamo: fechaPrestamo,
        fechaDevolocion: fechaLimiteDevolucion,
        nombreUsuario: nombreUsuario,
        tipoDocumento: tipoDocumento,
        documento: documento,
        direccion: direccion, 
        telefono: telefono,
        correo: correo 
    }
    librosPrestados.push(libro)
}

function calcularDiasDeMora(fechaLimite) {
    const fechaLimiteDate = new Date(fechaLimite)
    const fechaActual = new Date()
     
    if(fechaActual > fechaLimiteDate){
        let diferenciaEnMilisegundos = fechaActual - fechaLimiteDate
        let diasDeMora = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24))
        diasDeMora
    }else{
        
    } 

    if (diasDeMora > 0) {
        let penalisacion = 500
        console.log('El usuario esta en mora por: ' + diasDeMora + ' días, por lo cual debera pagar un monto de: ' + (penalisacion * diasDeMora) + ' pesos');       
    }else{
        console.log('Gracias por utilizar nuestros servicio.');
        console.log('Libreria Dubrew, siempre contigo');
    }
}

function devolverLibro(nombre) {
    let buscarUsuario = librosPrestados.find((usuario) => {
        if (usuario === nombre) {
            return usuario
        }
    })
    
}
let nombreUsuarioDev = document.getElementById('nombreUsuarioDevolucion').value
devolverLibro(nombreUsuarioDev)
