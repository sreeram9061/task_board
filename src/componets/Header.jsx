import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo-TB.svg"
import { FaTrophy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusOfUser} from "../Redux/user";
import { setSearchTasks, sortName } from "../Redux/task";
import { useEffect, useRef } from "react";
const Header = () => {

    const{userName}=useSelector(state=> state.user)
    const{statusOfUser}=useSelector(state=> state.user)
    const{points,tasks,addTaskBtn}=useSelector(state=> state.task)
    
    const dispatch=useDispatch()
    const selcter=useRef()


    const handileSelector=()=>{
        dispatch(sortName(selcter.current.value))
    }

    const handileChanges=(e)=>{
       const matchedTask= tasks.filter(item=> e.target.value!='' && item.taskName.match(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)))
       dispatch(setSearchTasks({textOfArr:matchedTask,lengthOfText:e.target.value.split('').length}))
    }

    useEffect(()=>{
        selcter.current.value="TASK_DFLT"
    },[addTaskBtn])
    
  return (
    <div className="header">
        <div className="header_top">
            <div className="remov_data_user">
                <p onClick={()=>dispatch(changeStatusOfUser(!statusOfUser))} style={{cursor:'pointer'}}><RiLogoutCircleLine className="icon"/> Remove Data</p>
                <p><FaUserCircle className="icon"/>{userName}</p>
            </div>
        </div>

        <div className="header_bottom">
            <div className="header_box">
                <div className="logo_right_side">
                    <img src={logo} alt="" />
                </div>

                <div className="left_side">
                    <select  ref={selcter} onChange={handileSelector}>
                        <option value="TASK_DFLT">Default Sorting </option>
                        <option value="TASK_ASC">Sort By Task Name ASC.</option>
                        <option value="TASK_DESC">Sort By Task Name DESC.</option>
                        <option value="DATE_DESC">Sort By Last Created</option>
                    </select>
                    <input onChange={handileChanges} type="search" placeholder="Search"/>
                    <div className="points">
                        <p><FaTrophy className="trophy"/>: {points}</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
   