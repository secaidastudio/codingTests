'use strict'

class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad() {
        this.velocidad += 1;
    }

    reducirVelocidad() {
        this.velocidad -= 1;
    }
}

//herencias 

class Autobus extends Coche {
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura() {
        return "La altura del bus es de: " + this.altura;
    }
}


var autobus1 = new Autobus('Hino', 120, 2011);
console.log(autobus1.mostrarAltura());

var coche1 = new Coche('Toyota', 200, 2017);
var coche2 = new Coche('Audi', 250, 2019);
var coche3 = new Coche('Subaru', 195, 2010);

document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>");

document.write("<h1>Velocidad el bus: " + autobus1.velocidad + "</h1>");
autobus1.aumentarVelocidad();
autobus1.aumentarVelocidad();
autobus1.aumentarVelocidad();
document.write("<h1>Velocidad el bus: " + autobus1.velocidad + "</h1>");