import '../styles/footer.css';
import logoFooter from '../assets/logoFooter.svg';

function Footer() {
    const path = typeof window !== 'undefined' && window.location.pathname;
    return (
        <div className={`${'footer'} ${path === '/' ? 'position' : ''}`}>
            <img src={logoFooter} alt="logo dans le footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer