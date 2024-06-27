import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/reducer/reducer"



let store = configureStore({
    reducer: {
        adminSlice: adminSlice,
    }
})

export default store;