console.log(productos)

// const copyProductos=[].concat(productos)
// // console.log(copyProductos)

function descuento(array){
    
    array.forEach(productos=>{
        // console.log(productos.valor)
        // console.log(productos.oferta)
        if(productos.oferta===true){
        productos.valor=Math.round(productos.valor*0.95)
        return productos.valor}
        
       
    })
    
    

}

descuento(productos)

function cardsAHtml( array ){

    const contenedor = document.querySelector(".contenedor")

    array.forEach(productos=>{
        const card = document.createElement("div")
        card.className="card"
        // console.log(card)
        card.innerHTML=`
            <div class="container-img">
                 <img src=${productos.img} alt=${productos.name}>
            </div>
            <h2>
                ${productos.marca}
            </h2>
            <h3>
                ${productos.name}
            </h3>
            <h3 class="oferta">
                Precio: $${productos.valor}
            </h3>
            <p>${productos.descripcion}</p>


        `
        contenedor.appendChild(card)
    })

}

cardsAHtml(productos)




// function mayor(array){
//     array.sort(copyProductos.valor)
//     console.log(copyProductos)
// }
// mayor(copyProductos)

// function ordenar(a,b){
//     if(a<b){
//         return-1;
//     }
//     if(a>b){
//         return 1;
//     }
//     return 0;
// }
// copyProductos.sort(function(a,b){
//     if(a.valor>b.valor){
//         return 1;
//     }
//     if(a.valor>b.valor){
//         return -1;
//     }
//     return 0,console.log(copyProductos)

const copyProductos=[].concat(productos)
// console.log(copyProductos)

function ordenar(){
copyProductos.sort(function(a, b) {
  return a.valor - b.valor
});
console.log(copyProductos); 
}

function verMenMay(){
    const  ver=confirm("¿Ordenar de menor a mayor segun el precio?")
    if(ver===true){
        ordenar() 
    }
   
}
verMenMay()
// }
// )
// console.log(copyProductos)
// function verOfertas(personas){
// const vOfertas=confirm('¿desea ver las ofertas?')
// if(vOfertas===true){
//     personas.filter(productos=>productos.oferta===true)
    
//     }console.log (productos)

// }
   


// verOfertas()
function verOfertas(){
const pProductos= productos.filter(productos=>productos.oferta);
console.log(pProductos)}

const vOfertas=confirm('¿Desea ver nuestras ofertas?')
if(vOfertas===true){
    verOfertas()
}
// verOfertas()

  function buscar(){

  const nombre= prompt("¿Que modelo esta buscando?")
  const resultado = productos.find(({ name }) => name === nombre);
  
 console.log(resultado); }


  buscar()
  