import img from '../assets/IMG.png'
import '../styles/banner.css'

function Banner() {
    return (
        <div className='banner'>
            <img src={img} alt="image de banniere" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Banner