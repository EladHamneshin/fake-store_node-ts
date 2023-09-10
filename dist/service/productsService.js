import * as productsData from '../data/productsData.js';
export async function getProducts() {
    return await productsData.getProducts();
}
export async function getProductById(id) {
    return await productsData.getProductById(id);
}
export async function addProduct(product) {
    return await productsData.addProduct(product);
}
export async function updateProduct(productId, product) {
    return await productsData.updateProduct(productId, product);
}
export async function deleteProduct(productId) {
    return await productsData.deleteProduct(productId);
}
export async function increseProductQuantity(productId) {
    return await productsData.increseProductQuantity(productId);
}
export async function decreseProductQuantity(productId) {
    return await productsData.decreseProductQuantity(productId);
}
export async function addProducts(products) {
    return await productsData.addProducts(products);
}
