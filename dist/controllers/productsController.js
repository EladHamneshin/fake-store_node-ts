import * as productsService from '../service/productsService.js';
const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
export async function getProducts(_, res) {
    const products = await productsService.getProducts();
    res.status(OK).send(products);
}
export async function getProductById(req, res) {
    try {
        const id = +req.params.id;
        const product = await productsService.getProductById(id);
        res.status(OK).send(product);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function addProduct(req, res) {
    try {
        const product = req.body;
        const result = await productsService.addProduct(product);
        res.status(CREATED).send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function updateProduct(req, res) {
    try {
        const id = +req.params.id;
        const product = req.body;
        const result = await productsService.updateProduct(id, product);
        res.status(OK).send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function deleteProduct(req, res) {
    try {
        const id = +req.params.id;
        const result = await productsService.deleteProduct(id);
        res.status(OK).send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function increseProductQuantity(req, res) {
    try {
        const id = +req.params.id;
        const result = await productsService.increseProductQuantity(id);
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function decreseProductQuantity(req, res) {
    try {
        const id = +req.params.id;
        const result = await productsService.decreseProductQuantity(id);
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
