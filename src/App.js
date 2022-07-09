import AddTask from "./components/addTask/addTask";
import TaskList from "./components/taskList/taskList";
import Sorting from "./components/sorting/sorting";
import SearchTask from "./components/searchTask/searchTask";

function App() {
  return (
    <div className="container">
      <div className="m-5">
      
        <AddTask />
        <div className="d-flex justify-content-around mb-2">
          <Sorting />
          <SearchTask />
        </div>
        
        <TaskList />
      </div>
     
    </div>
  );
}

export default App;
