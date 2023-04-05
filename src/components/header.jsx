import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/header.css';

const Header = ({ classTypeAbout, classTypeHome }) => {
    return (
        <div className="header">
            <img src={logo} alt="logo du site" />
            <nav className="navigation">
                <ul>
                    <Link to='/' className={`${'navLink'}-${classTypeHome}`}>
                        <li>Accueil</li>
                    </Link>
                    <Link to='/about' className={`${'navLink'}-${classTypeAbout}`} >
                        <li>A propos</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default Header