import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/rating.css';

function Ratings({ findApart }) {

    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < findApart.rating) {
            stars.push(<FontAwesomeIcon key={i} className='ratingStarOrange' icon={faStar} />)
        }
        else {
            stars.push(<FontAwesomeIcon key={i} className='ratingStar' icon={faStar} />)
        }
    }
    return (
        <span className='ratings'>{stars}</span>
    )
}
export default Ratings