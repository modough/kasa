import '../styles/appartmentInfos.css';

function AppartmentInfos() {
    return (
        <section className="appartmentPage-infos">
            <div className='left-infos'>
                <p className='title'>title</p>
                <p className='location'>city</p>
                <ul className='tags'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='right-infos'>
                <p className='host-name'>name</p>
                <img src="" alt="image de l'hôte" />
                <span className='ratings'>stars</span>
            </div>
            <div className='description'>
                <p>description</p>
                <span>text</span>
            </div>
            <div className='equipements'>
                <p>Equipements</p>
                <ul className='equipements-list'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    )
}

export default AppartmentInfos