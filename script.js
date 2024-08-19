// Verifica que solo se permitan letras en minusculas
document.querySelector('.area-texto-in').addEventListener('input', function (event) {
    const texto = event.target.value;
    const textoValido = texto.replace(/[^a-zñ\s]/g, ''); // Permite solo letras minúsculas y espacios
    if (texto !== textoValido) {
        alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
        event.target.value = textoValido; // Reemplaza el texto con el texto válido
    }
});

// Función para encriptar el texto usando las "llaves" especificadas
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto usando las "llaves" especificadas
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para manejar el botón de encriptar
document.querySelector('.boton-encr').addEventListener('click', () => {
    let texto = document.querySelector('.area-texto-in').value;
    let textoEncriptado = encriptarTexto(texto);
    document.querySelector('.area-texto-out').value = textoEncriptado;
});

// Función para manejar el botón de desencriptar
document.querySelector('.boton-desencr').addEventListener('click', () => {
    let texto = document.querySelector('.area-texto-in').value;
    let textoDesencriptado = desencriptarTexto(texto);
    document.querySelector('.area-texto-out').value = textoDesencriptado;
});

// Función para verificar si hay contenido en el área de salida y ajustar el fondo y el texto
function actualizarFondoSalida() {
    let areaSalida = document.querySelector('.area-texto-out');
    let textoNoEncontrado = document.querySelector('.texto-no-encontrado');

    if (areaSalida.value.trim() !== "") {
        areaSalida.style.backgroundImage = "none";
        textoNoEncontrado.style.display = "none";
    } else {
        areaSalida.style.backgroundImage = "url('/assets/monito.png')";
        textoNoEncontrado.style.display = "block";
    }
}

// Monitorea los cambios en el área de salida y actualiza el fondo y el texto
document.querySelector('.area-texto-out').addEventListener('input', actualizarFondoSalida);

// También puedes llamar a la función al mostrar el resultado de la encriptación/desencriptación
document.querySelector('.boton-encr').addEventListener('click', () => {
    let texto = document.querySelector('.area-texto-in').value;
    let textoEncriptado = encriptarTexto(texto);
    document.querySelector('.area-texto-out').value = textoEncriptado;
    actualizarFondoSalida();
});

document.querySelector('.boton-desencr').addEventListener('click', () => {
    let texto = document.querySelector('.area-texto-in').value;
    let textoDesencriptado = desencriptarTexto(texto);
    document.querySelector('.area-texto-out').value = textoDesencriptado;
    actualizarFondoSalida();
});

// Función para copiar el texto del área de salida al portapapeles
function copiarTexto() {
    const textoSalida = document.querySelector('.area-texto-out').value;
    navigator.clipboard.writeText(textoSalida).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

// Añade el evento al botón Copiar
document.querySelector('.boton-copiar').addEventListener('click', copiarTexto);
// Añade el evento al botón borrar
document.querySelector('.boton-borrar').addEventListener('click', borrarTexto);


// Función para borrar el texto del área de salida
function borrarTexto() {
    const areaTextoOut = document.querySelector('.area-texto-out');
    areaTextoOut.value = ''; // Borra el contenido del área de texto de salida

    // Verifica si el área de texto está vacía
    if (areaTextoOut.value === '') {
        areaTextoOut.style.backgroundImage = "url('/assets/monito.png')"; // Muestra la imagen de fondo nuevamente
        document.querySelector('.texto-no-encontrado').style.display = 'block'; // Muestra el texto de "Ningún mensaje fue encontrado"
    }
}


