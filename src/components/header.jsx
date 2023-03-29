import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo du site" />
            <nav className="navigation">
                <ul>
                    <Link to='/'>
                        <li>Accueil</li>
                    </Link>
                    <Link to='/about'>
                        <li>A propos</li>
                    </Link>

                </ul>
            </nav>
        </div>
    )
}
export default Header