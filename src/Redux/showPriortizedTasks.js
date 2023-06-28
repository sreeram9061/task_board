import { createSlice } from "@reduxjs/toolkit";

const initialState={
    statusPT:false
}

const sPrioTasksSlice=createSlice({
    name:'prioritizedTask',
    initialState,
    reducers:{
        replaysTheStatusPT(state,actions){
            state.statusPT=actions.payload
        }
    }
})

export const {replaysTheStatusPT}=sPrioTasksSlice.actions
export default sPrioTasksSlice.reducer