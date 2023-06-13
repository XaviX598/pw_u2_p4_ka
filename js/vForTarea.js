const arregloPersonas = [
    // { nombre: "Xavier", apellido: "Aguilar" },
    // { nombre: "Juan", apellido: "González" },
    // { nombre: "María", apellido: "López" },
    // { nombre: "Carlos", apellido: "Martínez" },
    // { nombre: "Ana", apellido: "Ramírez" },
    // { nombre: "Pedro", apellido: "Fernández" },
    // { nombre: "Laura", apellido: "Pérez" },
    // { nombre: "Diego", apellido: "Hernández" },
    // { nombre: "Sofía", apellido: "Díaz" },
    // { nombre: "Andrés", apellido: "Torres" }
]

console.log(arregloPersonas)
const app = Vue.createApp({
    data() {
        return {
            miarreglo: arregloPersonas,
            nombre:"",
            apellido:"",
            edad:"",
            numeroTarjeta:""
        }
    },
    methods:{
        
        agregarPersona(){
            // console.log('Probando el modificador de evento')
            const nuevaPersona = {
                nombre:this.nombre,
                apellido:this.apellido,
                edad: this.edad,
                numeroTarjeta: this.numeroTarjeta
            }
            
            this.miarreglo.unshift(nuevaPersona)
        }
    }

})

app.mount('#miApp')