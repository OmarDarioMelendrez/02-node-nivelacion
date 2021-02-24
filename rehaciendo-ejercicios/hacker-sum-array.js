//Realizando la suma de elementos de un array 


const datos = [ 3,3,3];

function simpleSumArray (ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    console.log(sum)
}

simpleSumArray(datos);
