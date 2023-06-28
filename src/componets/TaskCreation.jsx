import { useEffect, useRef } from "react"
import { useDispatch, useSelector} from "react-redux"
import {setTasks, sortName } from "../Redux/task"
import { useDateAndTime } from "../hocks/useDateAndTime"
import { replaysTheStatusPT } from "../Redux/showPriortizedTasks"


const TaskCreation = () => {

  const {statusPT}=useSelector(state=> state.sPT)
  const{soart}=useSelector(state=> state.task)


    const dispatch=useDispatch()
    const inp=useRef()
    const pT=useRef()
    const eD=useRef()
    const sCT=useRef()


    const handileData=()=>{
        const taskName=inp.current.value
        inp.current.value ? dispatch(setTasks({
            taskName:taskName.charAt(0).toUpperCase() + taskName.slice(1),
            createdTime:useDateAndTime("Created On"),
            pT:pT.current.checked,
            eD:eD.current.value,
            taskDirection:sCT.current.checked
        })) : alert('Please Enter a Task Name')

        inp.current.value=''
        pT.current.checked=false
        sCT.current.checked=false
        eD.current.value=''
      
    }

    const handleShowPrioritizedTask=()=>{
      dispatch(replaysTheStatusPT( !statusPT))
    }

    
  return (
    <div  className="taskCreation">
       <div className="left_section">
         <div  className="top_section">
           <input ref={inp} className="task_add_input" placeholder="Task Name" type="text" name="" id="" />
           <button  onClick={handileData}>Add</button>
         </div>
   
         <div className="bottom_section">
           <div>
              <input ref={pT} type="checkbox" name="pt"/>
              <label htmlFor="pt">Prioritize Task</label>
           </div>
   
           <div>
             <input ref={eD} min={0} type="number" name="days" id="" />
             <label htmlFor="days">Expected Days</label>
           </div>
   
           <div>
             <input ref={sCT} type="checkbox" name="sct" />
             <label htmlFor="sct">Switch To Completed Tasks</label>
           </div>
          </div>
       </div>
        <button className={statusPT ? "btn_true":"btn_false" } onClick={handleShowPrioritizedTask}>Prioritized Tasks onlly</button>
    </div>
  )
}

export default TaskCreation
