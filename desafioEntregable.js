class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts=()=>{
        return this.products
    }
    addProducts= function({title,description,price,thumbnail,code,stock}){
        if(!title||!description||!price||!thumbnail||!code||!stock){
            console.log("Incomplete data")
            return null
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        const repeatedCode = this.products.find(property=>property.code===code)
        if(repeatedCode){
            console.log("Repeated code")
            return null
        }
        
        if(this.products.length===0){
            product.id = 1
        }else{
            const lastProduct = this.products[this.products.length-1]
            product.id = lastProduct.id +1
        }
        this.products.push(product)
    }
    getProductById=(productId)=>{
        const productFound = this.products.find(product=>product.id===productId)
        if(productFound){
            return console.log("Product found successfully: ", productFound)
        }else{
            console.log("Not found")
            return null
        }
    }
}

const products = new ProductManager()

console.log(products.getProducts())

products.addProducts({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
})

console.log(products.getProducts())

products.addProducts({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
})

products.getProductById(2)
products.getProductById(1)
