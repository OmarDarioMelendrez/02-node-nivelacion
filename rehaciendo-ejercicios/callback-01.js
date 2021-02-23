const empleados = [
    {
        id: 1,
        nombre: 'Ruben'
    },
    {
        id: 2,
        nombre: 'Omar'
    },
    {
        id: 3,
        nombre: 'Daniela'
    },
    {
        id: 4,
        nombre: 'Florencia'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    },
    {
        id: 4,
        sueldo: 2500
    }
]

const getEmpleadoById = (id, cb) => {
    const empleado = empleados.find((e) => e.id === id)
    if (empleado) {
        cb(null, empleado);
    } else {
        cb(new Error('El empleado con ese id no existe.'));
    }
}

const getSueldoById = (id, empleado) => {
    const nombreEmpleado = empleado.nombre;
    const sueldo = sueldos.find((e) => e.id === id);
    if (sueldo) {
        const sueldoEmpleado = sueldo.sueldo;
        if (sueldoEmpleado != null) {
            console.log(`El empleado ${nombreEmpleado} tiene un sueldo de ${sueldoEmpleado}.`)
        }
    } else {
        console.log('Ups!');
        console.log(`El empleado ${nombreEmpleado}, trabaja a donor.`);
        return;
    }

}

const id = 1;

getEmpleadoById(id, (error, empleado) => {
    if(error) {
        console.log('Error!!!');
        console.log(error);
        return;
    }

    getSueldoById(id, empleado);

})