function Infos({ findApart }) {

    return (
        <section key={findApart.id}>
            <h2 className='title'>{findApart.title}</h2>
            <p className='location'>{findApart.location}</p>
            <ul className='tags'>
                {findApart.tags.map((tag, i) => <li key={i}>{tag}</li>)}
            </ul>
        </section>
    )
}
export default Infos