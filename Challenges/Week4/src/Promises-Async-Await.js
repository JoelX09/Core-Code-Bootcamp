const datos = [{
    id:1,
    title: 'Iron Man',
    year: 2008
},{
    id:2,
    title: 'Spiderman: Homecoming',
    year: 2017
},{
    id:3,
    title: 'Avengers: Endgame',
    year: 2019
}];

// const getDatos = () =>{
//     return datos;
// }; // Es síncrono, la respuesta es inmediata

// const getDatos = () => {
//     setTimeout(() =>{
//         return datos;
//     }, 1500);
// }; // Simulando una peticion web, existe un delay en el retorno de la respuesta, es asincrono.

// console.log(getDatos());

// Promesas
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(datos);
        }, 1500);
    });
    
};

// getDatos()
//     .then((datos) => console.log(datos))

// Async/Await

async function fetchingData(){
    const datosFetched = await getDatos();
    console.log(datosFetched);
}

fetchingData();