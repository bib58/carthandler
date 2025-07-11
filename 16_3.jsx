import { createSlice } from "@reduxjs/toolkit";

const FoodSlicer = createSlice({
    name: "slice_1",
    initialState: {count:0},
    reducers: {
        addItems: (state) => {state.count += 1},
        removeItems : (state) => {state.count -= 1}
    }
})

export const { addItems , removeItems} = FoodSlicer.actions;
export default FoodSlicer.reducer