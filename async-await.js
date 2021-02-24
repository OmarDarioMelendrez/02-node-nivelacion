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

const getEmpleadoById =  (id) => {

        try {
            const empleado = empleados.find( (e) => e.id === id);
        
            if (empleado) {
                return empleado;
            }
            throw  new Error (`El empleado con id ${id} no existe`);
        } catch (error) {
            throw error;
        }
};
const getSueldoById =  (id) => {

        try {
            const sueldo = sueldos.find( (e) => e.id === id);
        
            if (sueldo) {
                return sueldo;
            }
            throw  new Error (`El empleado con id ${id} no tiene sueldo`);
        } catch (error) {
            throw error;
        }
};

const id = 1;

const getDatosCompletosEmpleado = async (id) => {
try {
        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        // return `El empleado  ${empleado.nombre} tiene un sueldo de ${sueldo.sueldo}`;
        return {
            id,
            nombre: empleado.nombre,
            sueldo: sueldo.sueldo
        }
    } catch (err) {
        throw err;
    }
}
    
getDatosCompletosEmpleado(id)
.then(data => console.log(`El empleado  ${data.nombre} tiene un sueldo de ${data.sueldo}`))
.catch(err => console.log(err.message))