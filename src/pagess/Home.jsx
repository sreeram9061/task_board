import Wrapper from "../componets/Wrapper"
import Header from "../componets/Header"
import TaskCreation from "../componets/TaskCreation"
import Tasklists from "../componets/Tasklists"
const Home = () => {
  return (
    <div className="container_of_home_page">
      <Wrapper>
        <Header/>
        <TaskCreation/>
        <Tasklists/>
      </Wrapper>
    </div>
  )
}

export default Home
