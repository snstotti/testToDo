import AddTask from "../addTask/addTask";
import SearchTask from "../searchTask/searchTask";
import Sorting from "../sorting/sorting";
import TaskList from "../taskList/taskList";

function Main() {
    return ( 
        <div className="m-5">
      
        <AddTask />
        <div className="d-flex justify-content-around mb-2">
          <Sorting />
          <SearchTask />
        </div>
        
        <TaskList />
      </div>
     );
}

export default Main;