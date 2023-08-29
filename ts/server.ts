import {productsRouter} from "./routes/productsRouter.js";
import * as productsDL from "./DL/productsDL.js";
import express from "express"
import morgan from "morgan";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use("/products", productsRouter);


app.listen(port, () => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
        const products = res.data;
        for(const product of products)
            product.quantity = Math.floor(Math.random() * 100);
    
        return productsDL.addProducts(products).then(() => console.log("Products DB is ready"));
    })
    .then(()=>console.log(`Server is up and running on port:${port}`));
});