import { createSlice } from "@reduxjs/toolkit"

const initialState={
    statusOfUser:false,
    userName:null
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        getTheUserName(state,{payload}){
            state.userName=payload.charAt(0).toUpperCase() +payload.slice(1)
            localStorage.setItem('userName',JSON.stringify(state.userName))
        },
        setData(state,{payload}){
            state.userName=payload
        },
        removeAllData(state){
            state.userName=null
            console.log("removed")
            localStorage.removeItem("tasks");
            localStorage.removeItem("userName");
        },
        changeStatusOfUser(state,{payload}){
            state.statusOfUser=payload
        }
    }
})

export const {getTheUserName,setData,removeAllData,changeStatusOfUser}=userSlice.actions
export default userSlice.reducer