console.log('componente vue')
console.log(Vue)

//
//dentro de las llaves se configuran opciones o optionsAPI
//para programar rn html se usa template
//``backtips son las comillas inclinadas, dentro van los elementos html
const app = Vue.createApp({

    // aqui no es necesario poner {{}} debido a que js ya interpreta js
    // opcion1,
    // opcion2,
    // opcionn, etc 
    //en este caso template es una opcion
    template: `
        <h1>Hola Mundo</h1>
        <p>Desde Vue.js</p>
        <p>{{1+1}}</p>
    `


    // aqui podemos declarar propiedad reactivas estas permiten vincular informacion de la vista (html) con 
    // mi programacion JavaScript, propiedades reactivas sirven oara manejar un modelo
    // data() {
    //     return{
    //         nombre: 'Xavier',
    //         apellido: 'Aguilar',
    //         mensaje: 'Hola mundo 2 des de vue.JS'
    //     } 
    // },




    // podemos declarar metodos javascript (nombre y argumentos )
    // methods:{
    //     cambiarNombre(){
    //         console.log('Boton cambiar nombre');
    //         // si usamos la propiedad reactiva dentro del codigo js usamos this, dentro de html no ponemos this
    //         // para cambiar algo en vue usamos la palabra this
    //         //cuando amnejamos propiedad reactivas el archivo envia al navegador, y no al reves y es por eso que no se refresca
    //         //spa (single page aplication)
    //         this.nombre = 'Peter'
    //     },
    //     cambiarApellido(){
    //         console.log('Boton cambiar apellido');
    //         this.apellido='Parker'
    //     }
    // }
})

app.mount('#miAplicacion')