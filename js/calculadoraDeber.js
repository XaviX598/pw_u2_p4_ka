
const app = Vue.createApp({
data() {
    return {
        igual: true,
        pantalla: ""
    };
},

methods: {
    opcionesNumericas(numero) {
    if (this.igual) {
        this.pantalla += numero
        this.igual=false
        
    } else {
        this.pantalla =  numero
        this.igual=false;
    }
    },

    simbologia(operaciones) {
        if (operaciones === "=") {
            
            this.pantalla =  eval(this.pantalla).toString();
        } else {
            this.pantalla+= operaciones
            this.igual =  true
        }
    },

    asignarNumero() {
        parseInt(this.pantalla)
        this.igual = false
    },
},

});

app.mount("#calculadoraApp");
