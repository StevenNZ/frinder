import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Frinder</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className="{item.cName}" to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;