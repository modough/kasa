import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Ratings() {
    return (
        <span className='ratings'>
            <FontAwesomeIcon className='icon left' icon={faStar} />
            <FontAwesomeIcon className='icon left' icon={faStar} />
            <FontAwesomeIcon className='icon left' icon={faStar} />
        </span>
    )
}

export default Ratings