import logo from '../assets/logo.svg';
import '../styles/header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo du site" />
            <nav className="navigation">
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header