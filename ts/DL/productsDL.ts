import jsonFile from 'jsonfile';
import Product  from '../models/product.js';
import * as utils from './utilsDL.js';


let products: Product[] = []

// ----------------------------------------- CRUD -----------------------------------------------------

export function getProducts(): Product[] {
    return utils.deepCopy(products);
}

export function getProductById(id: number): Product {
    const product = products.find(p => p.id === id);
    if (!product) 
        throw new Error(`Product with id: "${id}" not found`);
    
    return utils.deepCopy(product);
}

export function addProduct(product: Product) {
    if(utils.isIdExist(products ,product.id))
        throw new Error(`Product with id: "${product.id}" already exist`);

    products.push(utils.deepCopy(product));
    updateDb().then(()=>console.log("db updated successfully")).catch(err => console.log(err));
}

export async function addProducts(newProducts: Product[]) {
    for(const product of newProducts){
        if(utils.isIdExist(products ,product.id))
            throw new Error(`Product with id: "${product.id}" already exist`);
        products.push(utils.deepCopy(product));
    }
    return updateDb().then(()=>console.log("db updated successfully")).catch(err => console.log(err));
}

export function updateProduct(productId: number, product: Product) {
    const index = utils.getObjIndexById(products ,productId);
    products[index] = {...product};
    updateDb().then(()=>console.log("db updated successfully")).catch(err => console.log(err));
}

export function deleteProduct(productId: number) {
    const index = utils.getObjIndexById(products ,productId);
    products.splice(index, 1); 
    updateDb().then(()=>console.log("db updated successfully")).catch(err => console.log(err));
}

export function increseProductQuantity(productId: number) {
    const index = utils.getObjIndexById(products ,productId);
    products[index].quantity++;
    updateDb().then(()=>console.log("db updated successfully")).catch(err => console.log(err));
}

export function decreseProductQuantity(productId: number) {
    const index = utils.getObjIndexById(products ,productId);
    products[index].quantity--;
    updateDb().then(()=>console.log("db updated successfully")).catch(err => console.log(err));
}


//-------------------------------------- DB operatins -------------------------------------------
export function retriveDb() {
    return new Promise((resolve, reject) => {
        jsonFile.readFile("src/data/products.json", (err, obj) => {
            if (err) reject(err);
            else {
                products = obj.users;
                resolve("db retrived successfully");
            }
        });
    })
}

export function updateDb(){
    return jsonFile.writeFile("src/data/products.json", { products });
}
