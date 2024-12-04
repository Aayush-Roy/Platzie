import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter(item=>item.id!==action.payload);
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;