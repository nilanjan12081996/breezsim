import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../slice/ListSlice"
const store=configureStore({
    reducer:{
        lists:ListSlice
    }
})
export default store;