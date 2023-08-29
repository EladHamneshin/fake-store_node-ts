import { Request, Response } from 'express';
import * as productsBL from '../BL/productsBL.js';

export function getProducts(_: Request, res: Response) {
    res.send(productsBL.getProducts());
}

export function getProductById(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        res.send(productsBL.getProductById(id));
    } catch(err) {
        res.send((err as Error).message);
    }
}

export function addProduct(req: Request, res: Response) {
    try{
        const product = req.body;
        productsBL.addProduct(product);
        res.send(product);
    } catch(err) {
        res.send((err as Error).message);
    }
}

export function updateProduct(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        const product = req.body;
        productsBL.updateProduct(id ,product);
        res.send(productsBL.getProducts());
    } catch(err) {
        res.send((err as Error).message);
    }
}

export function deleteProduct(req: Request, res: Response) {
    try{
        const id: number = +req.params.id;
        productsBL.deleteProduct(id);
        res.send(productsBL.getProducts());
    } catch(err) {
        res.send((err as Error).message);
    }
}

export function increseProductQuantity(req: Request, res: Response) {
    const id: number = +req.params.id;
    try{
        productsBL.increseProductQuantity(id);
        res.send(productsBL.getProducts());
    } catch(err) {
        res.send((err as Error).message);
    }
}

export function decreseProductQuantity(req: Request, res: Response) {
    const id: number = +req.params.id;
    try{
        productsBL.decreseProductQuantity(id);
        res.send(productsBL.getProducts());
    } catch(err) {
        res.send((err as Error).message);
    }
}