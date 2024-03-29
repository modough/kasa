import '../styles/loadingPage.css';
import LoaderImg from '../assets/loader.svg'

function Loading() {
    return (
        <section className='loadingPage'>
            <section className="loadingBackground">
                <img src={LoaderImg} alt='loader image' />
            </section>
        </section>
    )
}

export default Loading