import * as productsDL from '../MongoDL/mongoDL.js';
import Product  from '../models/product.js';

export async function getProducts() {
    return await productsDL.getProducts();
}

export async function getProductById(id: number) {
    return await productsDL.getProductById(id);
}

export async function addProduct(product: Product) {
    return await productsDL.addProduct(product);
}

export async function updateProduct(productId: number, product: Product) {
    return await productsDL.updateProduct(productId, product);
}

export async function deleteProduct(productId: number) {
    return await productsDL.deleteProduct(productId);
}

export async function increseProductQuantity(productId: number) {
    return await productsDL.increseProductQuantity(productId);
}

export async function decreseProductQuantity(productId: number) {
    return await productsDL.decreseProductQuantity(productId);
}

export async function addProducts(products: Product[]) {
    return await productsDL.addProducts(products);
}



