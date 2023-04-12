import '../styles/loadingPage.css';
import LoaderImg from '../assets/loader.svg'

function LoadingPage() {
    return (
        <section className='loadingPage'>
            <div class="loadingBackground">
                <img src={LoaderImg} alt='loader image' />
            </div>
        </section>
    )
}

export default LoadingPage