import ProductManager from "./managers/ProductManager.js";

const productManager = new ProductManager()

const context = async () => {
    console.log(await productManager.getProducts())

    await productManager.addProducts({
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    })

    console.log(await productManager.getProducts())

    console.log(await productManager.getProductById(1))

    await productManager.updateProduct(1,{price: 500, stock: 1})
    console.log(await productManager.getProducts())

    await productManager.deleteProduct(1)
    console.log(await productManager.getProducts())
}

context()