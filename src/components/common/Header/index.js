import {NavLink} from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="main-navigation">
                <ul className="main-navigation__menu">
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/' exact activeStyle={{color: "red"}}>Начало</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/InfoBlock' exact activeStyle={{color: "red"}}>PERT</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage0' exact activeStyle={{color: "red"}}>Цели</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage1' exact activeStyle={{color: "red"}}>Шаг 1</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage2' exact activeStyle={{color: "red"}}>Шаг 2</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage3' exact activeStyle={{color: "red"}}>Шаг 3</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage4' exact activeStyle={{color: "red"}}>Шаг 4</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage5' exact activeStyle={{color: "red"}}>Шаг 5</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage6' exact activeStyle={{color: "red"}}>Шаг 6</NavLink></li>
                    <li className="main-navigation__menu_color"><NavLink className="main-navigation__menu_color_NavLink" to='/GoalStepPage7' exact activeStyle={{color: "red"}}>Шаг 7</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}