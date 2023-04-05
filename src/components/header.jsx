import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/header.css';

const Header = ({ classTypeAbout, classTypeHome }) => {
    return (
        <div className="header">
            <img src={logo} alt="logo du site" />
            <nav className="navigation">

                <Link to='/' className={`${'navLink'}-${classTypeHome}`}>
                    <p>Accueil</p>
                </Link>
                <Link to='/about' className={`${'navLink'}-${classTypeAbout}`} >
                    <p>A propos</p>
                </Link>

            </nav>
        </div>
    )
}
export default Header