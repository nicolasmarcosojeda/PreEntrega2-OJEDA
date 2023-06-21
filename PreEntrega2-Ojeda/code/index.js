function calcularStock(cantidadDisponible, cantidadVendida, cantidadConsumida) {
    // Pedir al usuario el stock inicial
    let stock = cantidadDisponible - cantidadVendida - cantidadConsumida;
    
    if (stock >= 0) {
      return stock;
    } else {
      return "No hay suficiente stock";
    }
  }
  //pedir al usuario que ingrese el codigo del articulo
  function obtenerNumeroIngresado(numero) {
    let codigo = parseInt(prompt(numero));
    
    while (isNaN(numero)) {
      numero = parseInt(prompt("Valor invalido. Por favor, ingrese un numero valido:"));
    }
    
    return numero;
  }

  let cerveza = [];

  let cantidadCerveza = obtenerNumeroIngresado("Ingrese la cantidad de cerveza:");

  for (let i = 0; i < cantidadCerveza; i++) {
    // Pedir al usuario las cantidades disponibles, vendidas y consumidas
  let cantidadDisponible = obtenerNumeroIngresado("Ingrese la cantidad disponible de cerveza:");
  let cantidadVendida = obtenerNumeroIngresado("Ingrese la cantidad vendida de cerveza:");
  let cantidadConsumida = obtenerNumeroIngresado("Ingrese la cantidad consumida de cerveza:");

  let cerveza = {
    cantidadDisponible: cantidadDisponible,
    cantidadVendida: cantidadVendida,
    cantidadConsumida: cantidadConsumida,
  };

  cerveza.push(cerveza);
  }

  cervezas.array.forEach((cerveza, index) => {
    cerveza.stockCalculado = calcularStock(cerveza.cantidadDisponible, cerveza.cantidadVendida, cerveza.cantidadConsumida);
    console.log("El stock de la cerveza ${index+1} es: ${cerveza.stockCalculado}");
  });

  let numeros = [1, 2, 3, 4, 5];

// Método indexOf()
const index = numeros.indexOf(3);
console.log("indexOf():", index);  // Resultado: 2

// Método lastIndexOf()
const lastIndex = numeros.lastIndexOf(3);
console.log("lastIndexOf():", lastIndex);  // Resultado: 2

// Método find()
const foundElement = numeros.find(element => element > 3);
console.log("find():", foundElement);  // Resultado: 4

// Método findIndex()
const foundIndex = numeros.findIndex(element => element > 3);
console.log("findIndex():", foundIndex);  // Resultado: 3


  
  

