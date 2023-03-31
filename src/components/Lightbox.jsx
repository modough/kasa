import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/lightbox.css';
function Lightbox() {
    return (
        <div className="lightbox">
            <img src="" alt="" />
            <FontAwesomeIcon className='icon left' icon={faChevronLeft} />
            <FontAwesomeIcon className='icon right' icon={faChevronRight} />
        </div>
    )
}

export default Lightbox