import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link to='/src/components'>Начало</Link></li>
                <li><Link to='/src/components/common/Title'>Title</Link></li>
                <li><Link to='/src/components/common/Title/Begin'>Begin</Link></li>
            </ul>
        </nav>
    );
}