// const ProductManager = require("./productManager");
import ProductManager from "../src/productManager.js";

const producto = new ProductManager();

console.log(producto.addProduct('prueba1','prueba', 200, 'sin imagen', 'abc123', '25'));
console.log(producto.addProduct('prueba',' prueba', 100, 'sin imagen', 'abc23', '23'));
console.log(producto.addProduct('prueba',' prueba', 100, 'sin imagen', 'abc233', '213'));

console.log(producto.getProducts());

// const productoActualizar = {
//     "id":30,
//     "title":"pruebita",
//     "thumbnail":"imagen",
//     "code":"abc233",
//     "stock":"213"
// }

// console.log(producto.updateProduct(3,productoActualizar));