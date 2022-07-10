import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return ( 
        <ul className="nav">
            <li className="">
                <Link className="nav-link" to="/">Задачи в работе</Link>
            </li>
            <li className="">
                <Link className="nav-link" to="/completedTask">Выполненые задачи</Link>
            </li>
            <li className="">
                <Link className="nav-link" to="/deletedTask">Удалённые задачи</Link>
            </li>
           
        </ul>
     );
}

export default Navbar;