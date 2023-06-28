import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTaskData } from "../Redux/task"
import TaskCard from "./TaskCard"


const Tasklists = () => {
   const{tasks,searchTasks,copyOfSearchArray,soartTAsks,soart}= useSelector(state=> state.task)
   const {statusPT}=useSelector(state=> state.sPT)
   const dispatch=useDispatch()
   
   useEffect(()=>{
    const taskFromLoacaolStorage=JSON.parse(localStorage.getItem('tasks'))
    taskFromLoacaolStorage &&  dispatch(setTaskData(taskFromLoacaolStorage))
   },[])

   function handleOnGoing(item){
    return !item.taskDirection
   }

   function handleOnCompleated(item){
    return item.taskDirection
   }

   const handilePTOnGoing=(it)=>{
    return it.pT && !it.taskDirection
   }
   
   const handilePTCom=(it)=>{
    return it.pT && it.taskDirection
   }

  return (
   
    <div className="tasklists">
        <div className="left_section">
            <h2>ONGOING TASKS</h2>
            {
                copyOfSearchArray?.length==0 && searchTasks.lengthOfText==0 ?
                 <div className="taskss">
                    {
                        !soart && tasks ?.filter(!statusPT ? handleOnGoing : handilePTOnGoing).map((item)=>(
                            <TaskCard taskData={item} key={item.id}/>
                        ))
                    }
                    {
                        soart && soartTAsks  ?.filter(!statusPT ? handleOnGoing : handilePTOnGoing).map((item)=>(
                            <TaskCard taskData={item} key={item.id}/>
                        ))
                    }
                    {
                        (!tasks?.some(!statusPT ? handleOnGoing : handilePTOnGoing) && <>
                        <div className="Emty_Status">
                            <p>No Items In Ongoing Tasks Tasks</p>
                        </div>
                        </>)
                    } 
                 </div> : 

                 <div className="search">
                    {
                        copyOfSearchArray?.filter(!statusPT ? handleOnGoing : handilePTOnGoing).map((item)=>(
                            <TaskCard taskData={item} key={item.id}/>
                        ))
                    }
                    {
                     (!copyOfSearchArray?.some(!statusPT ? handleOnGoing : handilePTOnGoing) && <>
                     <div className="Emty_Status">
                         <p>No Items In Ongoing Tasks Tasks</p>
                     </div>
                     </>)
                 }
                 </div>
            }            
        </div>      
        <div className="right_section">
            <h2>COMPLETED TASKS</h2>
            {
                copyOfSearchArray?.length==0 && searchTasks.lengthOfText==0 ?
                <div className="taskss">
                   {
                    !soart && tasks?.filter(!statusPT ? handleOnCompleated : handilePTCom).map((item)=>(
                           <TaskCard taskData={item} key={item.id}/>
                    ))
                   }
                   {
                    soart && soartTAsks ?.filter(!statusPT ? handleOnCompleated : handilePTCom).map((item)=>(
                           <TaskCard taskData={item} key={item.id}/>
                    ))
                   }
                   {
                       (!tasks?.some(!statusPT ? handleOnCompleated : handilePTCom) && <>
                       <div className="Emty_Status">
                           <p>No Items In Completed Tasks Tasks</p>
                       </div>
                       </>)
                   }
                </div> :
                <div className="search">
                    {
                        copyOfSearchArray?.filter(!statusPT ? handleOnCompleated : handilePTCom).map((item)=>(
                            <TaskCard taskData={item} key={item.id}/>
                        ))
                    }
                    {
                       (!copyOfSearchArray?.some(!statusPT ? handleOnCompleated : handilePTCom) && <>
                       <div className="Emty_Status">
                           <p>No Items In Completed Tasks Tasks</p>
                       </div>
                       </>)
                   }
                </div>

            }
        </div>      
    </div>
  )
}

export default Tasklists