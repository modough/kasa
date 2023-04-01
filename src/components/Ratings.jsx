import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';

function Ratings() {
    const { id } = useParams();
    const findAppart = mainData.find((appart) => appart.id === id);

    return (
        <span className='ratings'>
            {new Array(findAppart.rating).fill(null).map(() => (
                <FontAwesomeIcon className='ratingStar' icon={faStar} />
            ))}

        </span>
    )
}

export default Ratings