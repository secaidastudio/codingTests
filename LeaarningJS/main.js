var nombre = "Oscar Paiz";
var altura = 180;
/*
var concatenacion = nombre + " " + altura;
//document.write(concatenacion);
var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;
datos.innerHTML = `
    <h1>I'm a data box </h1>
    <h2> Hi, my name is: ${nombre}</h2>
    <h3> and my height is: ${altura} cm</h3>
`;

if (altura >= 180) {
    datos.innerHTML += '<h1> Your are tall!! </h1>'
} else {
    datos.innerHTML += '<h1> Your are shorty!! </h1>'
}

for (var i = 2010; i <= 2021; i++) {
    datos.innerHTML += "<h2> We are in the year " + i;

}
*/
function ShowMyName(nombre, altura) {
    var misDatos = `
    <h1>I'm a data box </h1>
    <h2> Hi, my name is: ${nombre}</h2>
    <h3> and my height is: ${altura} cm</h3>
`;
    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = ShowMyName("Rolando Secaida", 181);

}

imprimir();

var nombres = ['Oscar', 'Rolando', 'Carlos', 'Manuel'];
alert(nombres[0]);
document.write('<h1>Name list</h1>');

/*
for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '</br>');
}*/

/*nombres.forEach(function(nombre) {
    document.write(nombre + '</br>');

});*/

nombres.forEach((nombre) => {
    document.write(nombre + '</br>');

});

var coche = {
    modelo: 'BMW',
    maxima: 500,
    antiguedad: 2020,

    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "aleatorio"
};

document.write("<h1>" + coche.modelo + "</h1>");
coche.mostrarDatos();
console.log(coche);

//promesas
//usado en peticiones asincronas (ajax)
//un valor que puede estar disponible ahora, en el futuro o nunca

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola que tal";
        //saludo = false;
        if (saludo) {
            resolve(saludo);
        } else {
            reject("No hay saludo");
        }
    }, 2000);
});

saludar.then(resultado => {
        alert(resultado);
    })
    .catch(cualquierNombre => {
        alert(cualquierNombre);
    });