function Host({ findAppart }) {
    return (
        <div className='host-details'>
            <p className='host-name'>{findAppart.host.name}</p>
            <img src={findAppart.host.picture} alt="image de l'hôte" />
        </div>
    )
}
export default Host