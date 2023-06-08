console.log('componente vue')
console.log(Vue)

//dentro de las llaves se configuran opciones o optionsAPI
//para programar rn html se usa template
//``backtips son las comillas inclinadas, dentro van los elementos html
const app = Vue.createApp({
    // opcion1,
    // opcion2,
    // opcionn, etc 
    template: `
        <h1>Hola Mundo</h1>
        <p>Desde Vue.js</p>
    `
})

app.mount('#miAplicacion')