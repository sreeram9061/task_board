import { useDispatch, useSelector } from "react-redux"
import { changeDirectionOfTask, deleteTask, setStatusOfEditTask } from "../Redux/task"

const TaskCard = ({taskData:{createdTime,eD,id,pT,taskDirection,taskName}}) => {
  const dispatch=useDispatch()
  const {statusOfEditTask:{status}}=useSelector(state=> state.task)

  const handileFirstBtn=()=>{
    if(taskDirection){
       dispatch(changeDirectionOfTask(id))
    }else{
      dispatch(setStatusOfEditTask({status:!status,id}))
    }
  }

  const handileSecondBtn=()=>{
    if(!taskDirection){
      dispatch(changeDirectionOfTask(id))
    }else{
      dispatch(deleteTask(id)) 
    }
  }

  return (
    <div className="taskcard" style={pT ? {backgroundColor:'#0E2B57'}:{backgroundColor:'transparent'}}>
        <div className="taskcard_left_section">
          <h3>{taskName}</h3>
          <p>{createdTime}</p>
          {
            eD>0 && 
            <p className="expected_days">{`Should be completed in ${eD} day's`}</p>
          }
        </div>
        <div className="taskcard_right_section">
            <button onClick={handileFirstBtn} className='_btn'> {!taskDirection? "Edit" : "Move to Ongoing"}</button>
            <button onClick={handileSecondBtn} className={!taskDirection? "_btn" :"_D_btn"}> {!taskDirection? "Move":"Delete"}</button>
        </div>
    </div>
  )
}

export default TaskCard
