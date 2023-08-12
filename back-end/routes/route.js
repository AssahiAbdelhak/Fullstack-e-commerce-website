import { getAllProducts } from "../db/app.js"

export const serveAllProducts = async (req,res) => {
    try{
        res.header('Content-Type','application/json');
        res.header("Access-Control-Allow-Origin", "*");
        let allProducts  = await getAllProducts();
        let response = {
            succes : true,
            nbItems : allProducts.length,
            data : allProducts
        }
        await res.send(JSON.stringify(response));
    }catch(e){
        
        await res.send(e)
    }
    
}