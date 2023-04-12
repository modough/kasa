import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/header.css';
import { navLinks } from '../utils/helpers';

const Header = () => {
    const path = typeof window !== 'undefined' && window.location.pathname;
    console.log(path)
    return (
        <div className="header">
            <img src={logo} alt="logo du site" />
            <nav className="navigation">
                {
                    navLinks.map((link) =>
                        <Link to={link.path} className={`${'navLink'} ${path === link.path ? 'underline' : ''}`} key={link.name}>
                            <p>{link.name}</p>
                        </Link>
                    )
                }
            </nav>
        </div>
    )
}
export default Header