import { configureStore } from '@reduxjs/toolkit'
  import counterReducer from '../features/counter/counterSlice';
  import themeReducer from '../features/theme/themeSlice';
  import todoReducer from '../features/todo/todoSlice';
import { productApi } from '../features/product/productThunk';
// import  productReducer  from '../features/product/productSlice';

export const store = configureStore({
   reducer: {
        counter: counterReducer,
        theme:themeReducer,
        todo:todoReducer,
        // product:productReducer
         [productApi.reducerPath]: productApi.reducer,
      },
      middleware: (getDefault) =>
    getDefault().concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch