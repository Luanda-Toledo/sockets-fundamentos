var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//on: escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//emit: enviar informacion al servidor (Enviando objetos podemos enviar mas info de una sola vez)
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Servidor:', message);
});