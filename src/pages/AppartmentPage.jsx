import mainData from '../data/mainData.json';

function AppartmentPage() {
    return (
        <section className="AppartmentPage-container">
            <div className="lightbox">
                <img src="" alt="" />
            </div>
            <div className='left-details'>
                <p>title</p>
                <p>city</p>
                <p>details</p>
            </div>
            <div className='right-details'>
                <p>name</p>
                <span>stars</span>
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

export default AppartmentPage