import { MongoClient } from "mongodb";
const url = process.env.DB_URL;
export async function connect() {
    const client = await MongoClient.connect(url);
    const db = client.db(process.env.DB_NAME);
    return db;
}
export async function addProducts(products) {
    const db = await connect();
    //await db.collection("products").deleteMany({}) 
    const result = await db.collection("products").insertMany(products);
    return result;
}
export async function addProduct(product) {
    const db = await connect();
    const result = await db.collection("products").insertOne(product);
    return result;
}
export async function getProducts() {
    const db = await connect();
    const products = await db.collection("products").find().toArray();
    return products;
}
export async function getProductById(id) {
    const db = await connect();
    const product = await db.collection("products").findOne({ id: id });
    return product;
}
export async function updateProduct(id, product) {
    const db = await connect();
    const result = await db.collection("products").updateOne({ id: id }, { $set: product });
    return result;
}
export async function deleteProduct(id) {
    const db = await connect();
    const result = await db.collection("products").deleteOne({ id: id });
    return result;
}
export async function increseProductQuantity(id) {
    const db = await connect();
    const result = await db.collection("products").updateOne({ id: id }, { $inc: { quantity: 1 } });
    return result;
}
export async function decreseProductQuantity(id) {
    const db = await connect();
    const result = await db.collection("products").updateOne({ id: id }, { $inc: { quantity: -1 } });
    return result;
}
