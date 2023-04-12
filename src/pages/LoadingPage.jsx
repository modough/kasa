import '../styles/loadingPage.css';
import LoaderImg from '../assets/loader.svg'

function LoadingPage() {
    return (
        <section className='loadingPage'>
            <section class="loadingBackground">
                <img src={LoaderImg} alt='loader image' />
            </section>
        </section>
    )
}

export default LoadingPage