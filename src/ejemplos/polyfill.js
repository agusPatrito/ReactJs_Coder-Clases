const users = [
    {
        id: 1,
        nombre: 'Agus',
        rol:'Devop'
    },
    {
        id: 2,
        nombre: 'Juan',
        rol:'Devop senior'
    },
    {
        id: 3,
        nombre: 'Fran',
        rol:'Devop elder'
    }
];

// const resultado = users.find( (user) => user.nombre === 'Agus');

/// polyfill

function encontrar(array, fn) {
    for (var i = 0; i < array.length; i++){
        var current = array[i];

        if (fn(current) == true){
            return current;
        }
    }
}

const resultado1 = encontrar(users, (user) => user.nombre === 'Juan');


console.log(resultado1);
