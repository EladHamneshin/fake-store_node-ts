import * as productsDL from '../MongoDL/mongoDL.js';
export async function getProducts() {
    return await productsDL.getProducts();
}
export async function getProductById(id) {
    return await productsDL.getProductById(id);
}
export async function addProduct(product) {
    return await productsDL.addProduct(product);
}
export async function updateProduct(productId, product) {
    return await productsDL.updateProduct(productId, product);
}
export async function deleteProduct(productId) {
    return await productsDL.deleteProduct(productId);
}
export async function increseProductQuantity(productId) {
    return await productsDL.increseProductQuantity(productId);
}
export async function decreseProductQuantity(productId) {
    return await productsDL.decreseProductQuantity(productId);
}
export async function addProducts(products) {
    return await productsDL.addProducts(products);
}
