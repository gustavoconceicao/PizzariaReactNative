import {configureStore} from "@reduxjs/toolkit"
import shoppingCart from "./ducks/shoppingCart"

export default configureStore({
    reducer: {
        shoppingCart : shoppingCart
    }
})