
function Infos({ findAppart }) {

    return (
        <section key={findAppart.id}>
            <h2 className='title'>{findAppart.title}</h2>
            <p className='location'>{findAppart.location}</p>
            <ul className='tags'>
                {findAppart.tags.map((tag, i) => <li key={i}>{tag}</li>)}
            </ul>
        </section>
    )
}
export default Infos