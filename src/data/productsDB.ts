import { Collection, Db, MongoClient } from "mongodb";
import Product from "../models/product";

class DbManager{
    private static url: string = process.env.DB_URL!;
    private static dbName: string = process.env.DB_NAME!;
    private static collectionName: string = process.env.PRODUCTS_COLLECTION!;
    private static db?: Db;
    private static client?: MongoClient;

    private static async connect(){
        this.client = await MongoClient.connect(this.url);
        this.db = this.client.db(this.dbName);
    }

    private static async getCollection(): Promise<Collection<Product>>{
        if(!this.db || !this.client)
            throw new Error("You must initialize db and client first");
        return this.db.collection(this.collectionName);
    }

    private static async disconnect(){
        if(!this.client)
            throw new Error("You must initialize client first");
        await this.client.close();
    }

}



// public static async addProducts(products: Product[]){
//     await this.db.collection(this.collectionName).deleteMany({}) 
//     const result = await this.db.collection(this.collectionName).insertMany(products);
//     return result;
// }

// public async addProduct(product: Product) {
//     const result = await this.db.collection(this.collectionName).insertOne(product);
//     return result;
// }

// public async getProducts(){
//     const products = await this.db.collection(this.collectionName).find().toArray();
//     return products;
// }

// public async getProductById( id: number){
//     const product = await this.db.collection(this.collectionName).findOne({id: id});
//     return product;
// }

// public async updateProduct(id: number, product: Product){
//     const result = await this.db.collection(this.collectionName).updateOne({id: id}, {$set: product});
//     return result;
// }

// public async deleteProduct(id: number){
//     const result = await this.db.collection(this.collectionName).deleteOne({id: id});
//     return result;
// }

// public async increseProductQuantity(id: number){
//     const result = await this.db.collection(this.collectionName).updateOne({id: id}, {$inc: {quantity: 1}});
//     return result;
// }

// public async decreseProductQuantity(id: number){
//     const result = await this.db.collection(this.collectionName).updateOne({id: id}, {$inc: {quantity: -1}});
//     return result;
// }
