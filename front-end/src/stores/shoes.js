import {defineStore} from 'pinia'

export const useShoesStore = defineStore('shoes',{
    state:() => {
        return {
            products: [],
            addedProducts : [],
        }
    },
    actions : {
        async fetchAllProducts(){
            let res = await fetch('http://localhost:8080/products')
            let jsonRes = await res.json()
            this.products = jsonRes.data;
        },
        addProductToCart(id){
            console.log('id : ',id)
            this.addedProducts.push(id);
        },
        removeProductFromCart(id){
            this.addedProducts = this.products.filter((prod) => prod.id !== id);
        },
    },
    getters: {
        getPrice(){
            let price = 0;
            this.products.filter((prod) => {
                if(this.addedProducts.includes(prod.id)){
                    price += prod.price;
                }
            }
            )
            console.log("price",price)
            return price;
        }
    }
})