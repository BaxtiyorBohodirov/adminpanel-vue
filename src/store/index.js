import { createStore } from "vuex";
import products from './products'
import auth from "./auth";

export default createStore({
    modules:{
        products:products,
        auth:auth,
    }
})