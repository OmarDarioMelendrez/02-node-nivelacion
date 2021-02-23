const obtenerUsuario = (id, cb) => {
    const user = {
        id,
        nombre: 'Omar Dario'
    };
    setTimeout(() => cb(user), 5000);
}

obtenerUsuario(550, ({id, nombre}) => {
    console.log(`El usuario devuelto es ${nombre} y tiene el id ${id}`);
});

