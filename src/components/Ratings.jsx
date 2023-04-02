import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/rating.css';

function Ratings({ findAppart }) {

    return (
        <span className='ratings'>

            {new Array(parseInt(findAppart.rating)).fill(0).map((i) => {
                return i < 5 ?
                    <FontAwesomeIcon key={i++} className='ratingStarOrange' icon={faStar} /> :
                    <FontAwesomeIcon key={i++} className='ratingStar' icon={faStar} />
            }
            )}

        </span>
    )
}

export default Ratings