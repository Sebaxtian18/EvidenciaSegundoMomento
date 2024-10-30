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
},
{
    nombreTitulo: 'La niebla',
    fechaPrestamo: '2024-10-31',
    fechaLimiteDevolucion: '2024-11-15',
    nombreUsuario:'ana maria',
    tipoDocumento: 'CC',
    documento: '125657692',
    direccion: 'cl 12 # 64 - 52',
    telefono: 3212344295,
    correo: 'correo1@correo.com'
}]
//Funcion PrestarLibro nos crea y guarda un objeto con los datos de cada libro prestado.
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
    //Objeto por el cual crearemos los registros de cada libro prestado. Este resibe todos datos capturados por el formulario.
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
    //Se utiliza el metodo (push) para empujar los datos a el array (librosPrestados)
    librosPrestados.push(libro)
    console.log('su solicitud de prestamo ha sido registrada.');
    
}
//Funcion para calcular los días de mora que presenta el usuario.
function calcularDiasDeMora(fechaLimite) {
    //Se instancián dos datos tipo fecha para poder comparar fechas y hacer el calculo de los dias ya que esto convierte a milisegundos el dato String que es por defecto un formato fecha.
    const fechaLimiteDate = new Date(fechaLimite)
    const fechaActual = new Date()
    //Condicional para comparar fechas. 
    if(fechaActual > fechaLimiteDate){
        //Variable que almacenara la diferencia en milisegundo que hay entre ambas fechas.
        let diferenciaEnMilisegundos = fechaActual - fechaLimiteDate
        //Variable que almacenara los dias de mora despues de convertir la diferencia en milisegundos a el formato dia (1000 * 60 * 60 * 24).
        let diasDeMora = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24))
        //Condicional anidado para calcular la penalisación en caso de haber dias de mora.
        if (diasDeMora > 0) {
            let penalisacion = 500
            console.log('El usuario esta en mora por: ' + diasDeMora + ' días, por lo cual debera pagar un monto de: ' + (penalisacion * diasDeMora) + ' pesos');       
        }
        //En caso de no tener dias de mora se ejecuta este bloque de codigo.
    }else{
            console.log('El usuario esta al día.');
            console.log('Gracias por utilizar nuestros servicio.');
            console.log('Libreria Dubrew, siempre contigo.');
    } 
}

//Funcion para devolver el libro.
function devolverLibro() {
    //Variable para capturar el nombre de usuario ingresado por consola para compararlo y buscarlo en la base de datos si tiene algun libro en su pocesión.
    let nombre = document.getElementById('nombreUsuarioDevolucion').value
    //Variable para buscar en el arrary de los usuarios coincidencias con el usuario ingresado por consola.
    let buscarUsuario = librosPrestados.find((usuario) => {
        //condicional de eventos en caso de haber coincidencias entre el usuario ingresado y la base de datos.
        if (usuario.nombreUsuario === nombre) {
                //Se imprime por consola el usuario.
                console.log(usuario);
                console.log('El usuario: ' + usuario.nombreUsuario + ' Hace la devolucion del libro: ' + usuario.nombreTitulo)
                //Se llama a la variable calcular dias de mora para comprovar que el usuario no tenga penalizacion y en caso de tenerla aplicarla.
                calcularDiasDeMora(usuario.fechaLimiteDevolucion)
        }
    }) 
}