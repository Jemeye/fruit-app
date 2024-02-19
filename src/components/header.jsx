import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('user');

    // This function removes the user from the local storage and redirects to the login page
    const logOut = (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            localStorage.removeItem('user');
            navigate('/login');
        } else {
            navigate('/login');
        }
    }


    return (
        <header className="header-container">
            <Link className="logo-container" to="/">
                <h1 className="logo">Fruit</h1>
            </Link>
            <nav className="nav-container">
                <ul className="nav-list">
                    <button onClick={logOut}>
                        <li className="nav-item">
                            { isAuthenticated ? <FaSignOutAlt></FaSignOutAlt> : <FaSignInAlt></FaSignInAlt> }
                        </li>
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;