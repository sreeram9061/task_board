import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../Redux/user'
import DataRemoveCard from './DataRemoveCard'
import EditTask from './EditTask'
import User_get_page from '../pagess/User_get_page'
import Home from '../pagess/Home'


const MainComp = () => {


    const{userName}=useSelector(state=> state.user)
  

    const dispatch=useDispatch()
    const loacalStorageUserName=JSON.parse(localStorage.getItem('userName'))
  
    useEffect(()=>{
    loacalStorageUserName && dispatch(setData(loacalStorageUserName))
    },[])

  return (
    <>
    <DataRemoveCard/>
      <EditTask/>
      {
        (!userName && !loacalStorageUserName ? 
          <User_get_page/> :
          <Home/>)
      }
    </>
  )
}

export default MainComp
