import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <ul className="nav justify-content-center mt-4">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Задачи в работе</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/completedTask">Выполненые задачи</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/deletedTask">Удалённые задачи</Link>
            </li>
           
        </ul>
     );
}

export default Navbar;