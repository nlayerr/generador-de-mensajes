const mensajes = require('./mensajes.js');

const generarMensaje = () => {

    const temaAleatorio = mensajes.temas[Math.floor(Math.random() * mensajes.temas.length)];
    const accionAleatoria = mensajes.acciones[Math.floor(Math.random() * mensajes.acciones.length)];
    const consejoAleatorio = mensajes.consejos[Math.floor(Math.random() * mensajes.consejos.length)];

    return `${temaAleatorio} ${accionAleatoria} ${consejoAleatorio}.`;
}

console.log(generarMensaje());