import AddTask from "./components/addTask/addTask";
import TaskList from "./components/taskList/taskList";
import Sorting from "./components/sorting/sorting";

function App() {
  return (
    <div className="container">
      <div className="m-5">
      
        <AddTask />
        <Sorting />
        <TaskList />
      </div>
     
    </div>
  );
}

export default App;
