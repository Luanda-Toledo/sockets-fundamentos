const { io } = require('../server')

io.on('connection', (client) => { //el objeto client contine toda la info de la compu o usuario que se conecto
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    //on: escuchar
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);




        //callback(); lo utilizamos para saber que la accion que especificamos se realizo exitosamente.

        //if (mensaje.usuario) {
        //    callback({
        //        resp: 'Se envio exitosamente'
        //    });
        //} else {
        //    callback({
        //        resp: 'Se ha producido un error en el envio'
        //    });
        //}

    });

});