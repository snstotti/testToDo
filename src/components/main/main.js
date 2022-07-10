import AddTask from "../addTask/AddTask";
import SearchTask from "../searchTask/SearchTask";
import Sorting from "../sorting/Sorting";
import TaskList from "../taskList/TaskList";
import "./Main.css"

function Main() {
    return ( 
        <div className="main">
      
        <AddTask />
        <div className="mb-2 sorting-block">
          <Sorting />
          <SearchTask />
        </div>
        
        <TaskList />
      </div>
     );
}

export default Main;