function Host({ findApart }) {
    return (
        <div className='host-details'>
            <p className='host-name'>{findApart.host.name}</p>
            <img src={findApart.host.picture} alt="image de l'hôte" />
        </div>
    )
}
export default Host