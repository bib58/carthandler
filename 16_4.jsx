import { configureStore } from "@reduxjs/toolkit";
import slicing from "./16_3";

const dukan = configureStore({
    reducer: {
        slice_1: slicing
    }
})

export default dukan;