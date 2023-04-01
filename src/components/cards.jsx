import '../styles/cards.css';
import mainData from '../data/mainData.json';
import { Link } from 'react-router-dom';

function Cards() {

    return (
        <section className='cards-container'>
            {
                mainData.map((data) => (
                    <Link to={`/${data.id}`} className='cards' key={data.id}>
                        <img src={data.cover} alt={data.title} />
                        <p>{data.title}</p>
                    </Link>
                ))
            }
        </section>
    )
}
export default Cards