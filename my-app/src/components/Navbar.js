import "./Navbar.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems.js";

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
                    })}
                    <div className="button-container">
                        <button className="top-right-button">Sign Up</button>
                    </div>

                </ul>
            </nav>
        )
    }
}

export default Navbar;