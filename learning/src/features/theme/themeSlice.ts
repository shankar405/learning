import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store'
const initialState={
    value:"light"
}
export const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme:(state,action)=>{
            state.value= action.payload
    }
}

})
export const  {toggleTheme}=themeSlice.actions



// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.theme.value

export default themeSlice.reducer