// const saludar = () => {
//     console.log('Hola mundo')
// };

// setTimeout(saludar, 2000);

const getUserById = (id, cb) => {
    const user = {
        id,
        nombre: 'Dario'
    }
    setTimeout(() => cb(user), 2000);
}

getUserById(10, ({id, nombre}) => console.log(`Nombre: ${nombre} id: ${id}`));