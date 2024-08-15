import { createSlice } from "@reduxjs/toolkit";

let counterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        increase:(state,action)=>{
            console.log(action);
            action.payload?state.counter += action.payload:state.counter++
        },
        decrease:(state,action)=>{
                state.counter<=0?0:state.counter--;
        }
    }
})

export let counterReducer=counterSlice.reducer;
export let {increase,decrease}=counterSlice.actions;