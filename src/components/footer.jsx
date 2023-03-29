import '../styles/footer.css';
import logoFooter from '../assets/logoFooter.svg';

function footer() {
    return (
        <div className='footer'>
            <img src={logoFooter} alt="logo dans le footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default footer