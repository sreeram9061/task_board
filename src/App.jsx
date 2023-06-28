import { useDispatch, useSelector } from "react-redux"
import User_get_page from "./pagess/User_get_page"
import './styles/index.scss'
import "./styles/mediaquery.scss"
import Home from "./pagess/Home"
import {setData } from "./Redux/user"
import { useEffect } from "react"
import DataRemoveCard from "./componets/DataRemoveCard"
import EditTask from "./componets/EditTask"
import MainComp from "./componets/MainComp"

function App() {


  return (
    <div className='App'>
      <MainComp/>
    </div>
  )
}

export default App
