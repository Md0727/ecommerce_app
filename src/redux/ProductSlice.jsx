import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// action

export const fetchProduct = createAsyncThunk("product", async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json()
})

const productSlice = createSlice({
    name:'product',
    initialState: {
        data: [],
        isLoading : false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true;
        })
    }

})

export default productSlice.reducer

