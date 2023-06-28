import { createSlice } from "@reduxjs/toolkit";
import { useDateAndTime } from "../hocks/useDateAndTime";

const initialState={
    points:0,
    tasks:[],
    statusOfEditTask:{
        status:false,
        id:null,
    },
    addTaskBtn:false,
    soartTAsks:[],
    soart:false,
    searchTasks:{
        lengthOfText:0,
        textOfArr:[]
    },
    copyOfSearchArray:[]
}

function handileGetId(tas){
   let lastId=tas?.reduce((acc,cur)=> cur?.id>acc ? cur.id : acc ,tas[0]?.id)
   lastId+=1
   return lastId ? lastId : 0
}

const searchSoartTaskEdit=(tassk,inputVal,inputNum,id)=>{
    const newTask=tassk.map(item=>{
        if(item.id==id){
            item.taskName=inputVal.charAt(0).toUpperCase() +inputVal.slice(1)
            if(item.eD) item.eD=inputNum
           return item
        }else{
           return item
        }
    })

    return newTask
}

const taskSlice=createSlice({
    name:'task',
    initialState,
    reducers:{
        setTasks(state,actions){
            state.addTaskBtn=!state.addTaskBtn
            state.soart=false
            const taskss=state.tasks
            taskss.push({id:handileGetId(state.tasks) ,...actions.payload})
            localStorage.setItem('tasks',JSON.stringify(state))
        },

        setTaskData(state,actions){
            state.tasks=[...actions.payload.tasks]
            state.points=actions.payload.points
        },

        changeDirectionOfTask(state,actions){
            state.tasks.forEach(e=>{
                if(e.id==actions.payload && !e.taskDirection){
                    e.taskDirection=true
                }else if(e.id==actions.payload && e.taskDirection){
                    e.taskDirection=false
                    e.createdTime=`Recreated On ${e.createdTime.split('').reverse().splice(0,21).reverse().join('')}`
                }
            });
            localStorage.setItem('tasks',JSON.stringify(state)) 
        },

        deleteTask(state,actions){
            const upDatedTask=state.tasks.filter(e=> e.id!=actions.payload)
            state.tasks=upDatedTask
            state.points+=5
            localStorage.setItem('tasks',JSON.stringify(state))
        },

        cleareData(state){
            state.points=0
            state.tasks=[]
            state.soartTAsks=[]
            state.addTaskBtn=false
        },

        sortName(state,{payload}){

            if( payload=="TASK_ASC" || payload=="TASK_DESC"){
                state.soart=true
                const ascDesc=[...state.tasks]

                state.copyOfSearchArray==0 ?
                state.soartTAsks=ascDesc.sort((it,item)=>{
                    if (it.taskName < item.taskName ){
                      return -1;
                    }
                    if (it.taskName > item.taskName ){
                      return 1;
                    }
                return 0;
              }) :
                state.copyOfSearchArray=state.copyOfSearchArray.sort((it,item)=>{
                  if (it.taskName < item.taskName ){
                    return -1;
                  }
                  if ( it.taskName > item.taskName ){
                    return 1;
                  }
                return 0;
              })
 
            }
            if(payload=="TASK_DESC"){
                state.copyOfSearchArray==0 ? state.soartTAsks.reverse() : state.copyOfSearchArray.reverse()
            }  

            if(payload=="DATE_DESC"){
               state.soart=true
               state.copyOfSearchArray==0 ?
               state.soartTAsks=[...state.tasks].reverse() :
               state.copyOfSearchArray=[...state.searchTasks.textOfArr].reverse()
            }
            if(payload=="TASK_DFLT"){
                state.soart=false
                state.copyOfSearchArray=state.searchTasks.textOfArr
            }

        },

        setStatusOfEditTask(state,{payload}){
            state.statusOfEditTask=payload
        },

        editTask(state,{payload}){
            const {inputVal,inputNum,id}=payload
            searchSoartTaskEdit(state.tasks,inputVal,inputNum,id)
            state.soartTAsks.length>0 && searchSoartTaskEdit(state.soartTAsks,inputVal,inputNum,id)
            state.copyOfSearchArray.length>0 && searchSoartTaskEdit(state.copyOfSearchArray,inputVal,inputNum,id) 
            localStorage.setItem('tasks',JSON.stringify(state)) 
        },

        setSearchTasks(state,{payload}){
            state.searchTasks={...payload}
            state.copyOfSearchArray=state.searchTasks.textOfArr
        },
    }
})
export const{

        setTasks,
        setTaskData,
        changeDirectionOfTask,
        deleteTask,
        cleareData,
        sortName,
        setStatusOfEditTask,
        editTask,
        setSearchTasks,
    }=taskSlice.actions

export default taskSlice.reducer