import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTask, setStatusOfEditTask } from '../Redux/task'

const EditTask = () =>{

    const editTa=useRef()
    const inputText= useRef()
    const inputNumber=useRef()
    const dispatch=useDispatch()
    
    const {statusOfEditTask:{status,id}}=useSelector(state=> state.task)
    const {tasks}=useSelector(state=> state.task)

    useEffect(()=>{

        if(status){
          editTa.current.style.transform="translateY(0)"
          editTa.current.style.pointerEvents="all"
        }else{
          editTa.current.style.transform="translateY(-370px)"
          editTa.current.style.pointerEvents="none"
        }

    },[status])

    const handileCancel=()=>{
      dispatch(setStatusOfEditTask({status:!status,id})) 
      inputText.current.value=''
      inputNumber.current.value=''
    }

    const handileChangeData=()=>{
      if(inputText.current.value!=''  && inputNumber.current ){
        inputNumber.current.value!='' && dispatch(editTask({inputVal:inputText.current.value,inputNum:inputNumber.current ? inputNumber.current.value :false  ,id}))
        inputNumber.current.value!='' && dispatch(setStatusOfEditTask({status:!status,id})) 
        inputText.current.value=''
        inputNumber.current.value=''
      }else{
        inputText.current.value!='' && dispatch(editTask({inputVal:inputText.current.value,inputNum:inputNumber.current ? inputNumber.current.value :false  ,id}))
        inputText.current.value!='' && dispatch(setStatusOfEditTask({status:!status,id})) 
        inputText.current.value='' 
      }
    }

    const isIdThere=tasks?.filter(item=> item.id==id && item.eD)
    

  return(
    <div ref={editTa} className='edittask'>
      <div  className='tnputscont'>
        <input ref={inputText} type="text" placeholder='Task Name'/>
         {isIdThere.length>0 && <input ref={inputNumber} type="number" placeholder='Expected Days'/>} 
        <div className="changes">
           <p>want you change the data ?</p>
           <div className="btns">
               <button onClick={handileChangeData} style={{backgroundColor:'red',color:'white'}}>yes</button>
               <button onClick={handileCancel}>No</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default EditTask
