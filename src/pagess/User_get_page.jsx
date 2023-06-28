import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTheUserName } from '../Redux/user'

const User_get_page = () => {
    const dispatch=useDispatch()
    const inp=useRef()
    const handileClick=()=>{
        dispatch(getTheUserName(inp.current.value))
    }

    useEffect(()=>{
      if(inp, inp.current){
        inp.current.addEventListener('keypress',(e)=>{
          if(e.key=="Enter" && inp.current.value !=''){
            handileClick()
          }
        })

        inp.current.removeEventListener('keypress',(e)=>{
          if(e.key=="Enter" && inp.current.value !=''){
            handileClick()
          }
        })
        
      }
    },[])

  return (
    <div className='get_in_page'>
        <div className="userDetailsBox">
            <div className="headingContainer">
              <p>WELCOME To</p>
              <h2>TASK-BOARD</h2>
            </div>
            <input ref={inp} type="text" placeholder='User Name' />
            <button onClick={handileClick}>Get Start</button>
        </div>
    </div>
  )
}
export default User_get_page

