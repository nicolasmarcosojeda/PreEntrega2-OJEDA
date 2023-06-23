function calcularStock(cantidadDisponible, cantidadVendida, cantidadConsumida) {
  //pedir al usuario el stock inicial a evaluar
    let stock = cantidadDisponible - cantidadVendida - cantidadConsumida;
  
    if (stock >= 0) {
      return stock;
    } else {
      return "No hay suficiente stock";
    }
  }
  //pedir al usuario que ingrese el código del producto
  function obtenerNumeroIngresado(mensaje) {
    let numero = parseInt(prompt(mensaje));
  
    while (isNaN(numero) || numero <= 0) {
      numero = parseInt(prompt("Valor inválido. Por favor, ingrese un número válido y mayor a cero:"));
    }
  
    return numero;
  }
  
  let cervezas = [];
  
  let cantidadCervezas = obtenerNumeroIngresado("Ingrese la cantidad de cervezas a evaluar:");
  
  for (let i = 0; i < cantidadCervezas; i++) {
  //pedir al usuario el nombre de la cerveza a evaluar, cantidad disponible, vendidas y consumidas
    let nombreCerveza = prompt(`Ingrese el nombre de la cerveza ${i+1}:`);
    let cantidadDisponible = obtenerNumeroIngresado(`Ingrese la cantidad disponible de la cerveza ${nombreCerveza}:`);
    let cantidadVendida = obtenerNumeroIngresado(`Ingrese la cantidad vendida de la cerveza ${nombreCerveza}:`);
    let cantidadConsumida = obtenerNumeroIngresado(`Ingrese la cantidad consumida de la cerveza ${nombreCerveza}:`);
  
    let cerveza = {
      nombre: nombreCerveza,
      cantidadDisponible: cantidadDisponible,
      cantidadVendida: cantidadVendida,
      cantidadConsumida: cantidadConsumida
    };
  
    cervezas.push(cerveza);
  }
  
  cervezas.forEach((cerveza, index) => {
    cerveza.stockCalculado = calcularStock(cerveza.cantidadDisponible, cerveza.cantidadVendida, cerveza.cantidadConsumida);
    console.log(`El stock de la cerveza ${cerveza.nombre} es: ${cerveza.stockCalculado}`);
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
  
  

