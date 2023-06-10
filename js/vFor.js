
const estudiantes = {
    nombre: "Xavier",
    apellido: "Aguilar"
}

const arregloEstudiantes = [
    { nombre: "Xavier", apellido: "Aguilar" },
    { nombre: "Juan", apellido: "González" },
    { nombre: "María", apellido: "López" },
    { nombre: "Carlos", apellido: "Martínez" },
    { nombre: "Ana", apellido: "Ramírez" },
    { nombre: "Pedro", apellido: "Fernández" },
    { nombre: "Laura", apellido: "Pérez" },
    { nombre: "Diego", apellido: "Hernández" },
    { nombre: "Sofía", apellido: "Díaz" },
    { nombre: "Andrés", apellido: "Torres" }
]

console.log(arregloEstudiantes)
const app = Vue.createApp({
    data() {
        return {
            // mi arreglo es igual al arreglo
            // propiedad reactiva nombre
            miarreglo: arregloEstudiantes,
            nombre:"",
            apellido:""
        }
    },
    methods:{
        // agregarEstudiante(event){
        //     if(event.charCode == 13){
        //         // console.log('vamos agregar')
        //         console.log(this.nombre)
        //         // console.log('Presiono enter')
        //         const nuevoEstudiante = {
        //             nombre:this.nombre,
        //             apellido:this.apellido
        //         }
        //         // unshift es para inicio y push es para el final de la lista
        //         this.miarreglo.unshift(nuevoEstudiante)
        //     } else{
        //         console.log('No es enter')
        //     }
            
        // },
        agregarEstudiante2(){
            // console.log('Probando el modificador de evento')
            const nuevoEstudiante = {
                nombre:this.nombre,
                apellido:this.apellido
            }
            
            this.miarreglo.unshift(nuevoEstudiante)
        }
    }

})




app.mount('#miAplicacion2')

// hacer dfuncion normak
// function insertarEstudiante(estudiante){

// }
//desestructurar un objeto
// function insertarEstudiante({nombre}){

// }

