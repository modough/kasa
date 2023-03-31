import '../styles/cards.css';
import mainData from '../data/mainData.json';

function Cards() {

    return (
        <section className='cards-container'>
            {
                mainData.map((data) => (
                    <div className='cards' key={data.id}>
                        <img src={data.cover} alt={data.title} />
                        <p>{data.title}</p>
                    </div>
                ))
            }

        </section>
    )
}

export default Cards