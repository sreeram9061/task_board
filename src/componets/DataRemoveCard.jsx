import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import user, { changeStatusOfUser, removeAllData } from '../Redux/user'
import { cleareData } from '../Redux/task'

const DataRemoveCard = () => {
    const{statusOfUser} =useSelector(state=> state.user)
    const dispatch=useDispatch()
    const cont= useRef()

    const handileRemove=()=>{
        dispatch(removeAllData())
        dispatch(cleareData())
        dispatch(changeStatusOfUser(!statusOfUser))
    }

    useEffect(()=>{
      if(statusOfUser){
        cont.current.style.transform="translateY(50px)"
      }else{
        cont.current.style.transform="translateY(-170px)"
      }
    },[statusOfUser])

  return (
    <div className='dataremovecard' >
        <div ref={cont} className="container" >
          <p>Are your sure. you want remove all data ?</p>
          <div className='btns'>
              <button onClick={handileRemove} style={{backgroundColor:'red',color:'white'}}>Yes</button>
              <button onClick={()=>dispatch(changeStatusOfUser(!statusOfUser))} style={{backgroundColor:"#6DC5EB"}}>No</button>
          </div>
        </div>
    </div>
  )
}

export default DataRemoveCard
