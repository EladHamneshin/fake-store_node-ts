import * as productsBL from '../BL/productsBL.js';
const OK = 200;
const CREATED = 201;
export async function getProducts(_, res) {
    const products = await productsBL.getProducts();
    res.status(OK).send(products);
}
export async function getProductById(req, res) {
    try {
        const id = +req.params.id;
        const product = await productsBL.getProductById(id);
        res.status(OK).send(product);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function addProduct(req, res) {
    try {
        const product = req.body;
        const result = await productsBL.addProduct(product);
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
        const result = await productsBL.updateProduct(id, product);
        res.status(OK).send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function deleteProduct(req, res) {
    try {
        const id = +req.params.id;
        const result = await productsBL.deleteProduct(id);
        res.status(OK).send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function increseProductQuantity(req, res) {
    try {
        const id = +req.params.id;
        const result = await productsBL.increseProductQuantity(id);
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
export async function decreseProductQuantity(req, res) {
    try {
        const id = +req.params.id;
        const result = await productsBL.decreseProductQuantity(id);
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
}
