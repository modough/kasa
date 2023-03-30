
import img from '../assets/bannerAboutIMG.png';
import '../styles/bannerAboutPage.css'

function BannerAboutPage() {
    return (
        <div className='bannerAboutPage'>
            <img src={img} alt="image de banniere" />
        </div>
    )
}

export default BannerAboutPage