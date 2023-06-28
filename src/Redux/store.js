import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import taskReducer from "./task";
import sPrioTasksSliceReducer from "./showPriortizedTasks"

export const store=configureStore({
    reducer:{
        user:userReducer,
        task:taskReducer,
        sPT:sPrioTasksSliceReducer,
    }
})