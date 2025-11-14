// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "product/fetchProducts",
//   async () => {
//     const res = await fetch(
//       "https://fakestoreapi.com/products"
//     );
//     return await res.json();
//   }
// );
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
