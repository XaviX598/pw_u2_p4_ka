// let num = "";
// let igual = true;

const app = Vue.createApp({
data() {
    return {
        num: "",
        igual: true,
        pantalla: ""
    };
},

methods: {
    opcionesNumericas(numero) {
    if (igual) {
        pantalla:this.pantalla 
        // document.getElementById("labelResultado").innerHTML =
        // document.getElementById("labelResultado").innerHTML + numero;
    } else {
        pantalla:numero
        // document.getElementById("labelResultado").innerHTML = numero;
        igual:true;
    }
    },

    simbologia(operaciones) {
        if (operaciones == "=") {
            document.getElementById("labelResultado").innerHTML = eval(num + document.getElementById("labelResultado").innerHTML);
            num = "";
            igual = false;
        } else {
            num +=
            document.getElementById("labelResultado").innerHTML + operaciones;
            document.getElementById("labelResultado").innerHTML = "";
            console.log(num);
        }
    },

    asignarNumero() {
        parseInt(document.getElementById("labelResultado").innerHTML);
    },
},

});

app.mount("#calculadoraApp");
