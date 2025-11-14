// import { createSlice } from "@reduxjs/toolkit";
// import { fetchProducts } from "./productThunk";
// import type { RootState } from "../../app/store";

//  export interface product{
// id: number,
// title: string,
// price: number,
// image:string,
//  }

//  interface InitialState {
//     products:product[],
//     loading:boolean,
//     error:string | null 
//  }
//  const initialState:InitialState={
//      products: [],
//     loading: false,
//     error: null
//  }
// export const productSlice=createSlice({
//     name:"product",
//      initialState ,
//   reducers:{},
//   extraReducers:(builder)=>{
//    builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state) => {
//         state.loading = false;
//         state.error = "Failed to fetch todos";
//       });
//   }
// })
// export const selectCount = (state: RootState) => state.product.products
// export default productSlice.reducer