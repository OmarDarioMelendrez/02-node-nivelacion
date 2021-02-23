const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Manuel'
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
    }
]

const getEmpleadoById = (id, cb) => {
    let empleado = empleados.find( (e) => e.id === id );
    if(empleado) {
        cb(null, empleado)
    } else {
        cb(new Error(`El empleado de id: ${id} no existe`));
    }
}

const getSueldoById = (id, cb) => {
    let empleado = sueldos.find( (e) => e.id === id );
    if (empleado){
        cb(null, empleado)
    } else {
        cb(new Error(`El empleado de id: ${id} trabaja a donor.`));
    }
}

const id = 3;

getEmpleadoById(id, (error, empleado) => {
    if (error) {
        console.log('ERROR!!!!......');
        console.log(error);
        return;
    }
    let nombreEmpleado = empleado.nombre;
    getSueldoById(empleado.id, (error, empleado) => {
        if(error) {
            console.log('El empleado trabaja a donor!!');
            console.log(error);
            return;
        }
        console.log(`El empleado: ${nombreEmpleado} tiene un suelo de ${empleado.sueldo}`)
    })
})