import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink to="/" exact activeClassName="active" className="nav-link">
                        Home
                        </NavLink></li>
                        <li className="nav-item"><NavLink to="/grass" activeClassName="active" className="nav-link">
                        Grass
                        </NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" activeClassName="active" className="nav-link">
                        Contact
                        </NavLink></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;