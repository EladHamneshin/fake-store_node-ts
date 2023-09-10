import { Request, Response } from 'express';
import * as productsBL from '../BL/productsBL.js';

const OK = 200;
const CREATED = 201;

const BAD_REQUEST = 400;



export async function getProducts(_: Request, res: Response) {
    const products = await productsBL.getProducts();
    res.status(OK).send(products);
}

export async function getProductById(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        const product = await productsBL.getProductById(id);
        res.status(OK).send(product);
    } catch(err) {
        res.send((err as Error).message);
    }
}

export async function addProduct(req: Request, res: Response) {
    try{
        const product = req.body;
        const result = await productsBL.addProduct(product);
        res.status(CREATED).send(result);
    } catch(err) {
        res.send((err as Error).message);
    }
}

export async function updateProduct(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        const product = req.body;
        const result = await productsBL.updateProduct(id ,product);
        res.status(OK).send(result);
    } catch(err) {
        res.send((err as Error).message);
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        const result = await productsBL.deleteProduct(id);
        res.status(OK).send(result);
    } catch(err) {
        res.send((err as Error).message);
    }
}

export async function increseProductQuantity(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        const result = await productsBL.increseProductQuantity(id);
        res.send(result);
    } catch(err) {
        res.send((err as Error).message);
    }
}

export async function decreseProductQuantity(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        const result = await productsBL.decreseProductQuantity(id);
        res.send(result);
    } catch(err) {
        res.send((err as Error).message);
    }
}