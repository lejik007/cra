import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Начало</NavLink></li>
                    <li><NavLink to='/InfoBlock'>PERT</NavLink></li>
                    <li><NavLink to='/GoalStepPage0'>Цели</NavLink></li>
                    <li><NavLink to='/GoalStepPage1'>Шаг 1</NavLink></li>
                    <li><NavLink to='/GoalStepPage2'>Шаг 2</NavLink></li>
                    <li><NavLink to='/GoalStepPage3'>Шаг 3</NavLink></li>
                    <li><NavLink to='/GoalStepPage4'>Шаг 4</NavLink></li>
                    <li><NavLink to='/GoalStepPage5'>Шаг 5</NavLink></li>
                    <li><NavLink to='/GoalStepPage6'>Шаг 6</NavLink></li>
                    <li><NavLink to='/GoalStepPage7'>Шаг 7</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}