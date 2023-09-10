import { MongoClient } from "mongodb";
class DbManager {
    static url = process.env.DB_URL;
    static dbName = process.env.DB_NAME;
    static collectionName = process.env.PRODUCTS_COLLECTION;
    static db;
    static client;
    static async connect() {
        this.client = await MongoClient.connect(this.url);
        this.db = this.client.db(this.dbName);
    }
    static async getCollection() {
        if (!this.db || !this.client)
            throw new Error("You must initialize db and client first");
        return this.db.collection(this.collectionName);
    }
    static async disconnect() {
        if (!this.client)
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
