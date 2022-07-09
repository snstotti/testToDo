import { useSelector } from "react-redux";
import ItemList from "../itemList/itemList";
import Spiner from "../spiner/spiner";


function RenderTasksList({listTask, flag}) {

    let list = listTask.map(task => <ItemList key={task.id} data={task} />)

    if (flag) return <Spiner />

    return (
        <>
            {list}
        </>
    );
}

export default RenderTasksList;