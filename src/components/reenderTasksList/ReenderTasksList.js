import ItemList from "../itemList/ItemList";
import Spiner from "../spiner/Spiner";


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