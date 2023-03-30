import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function CollapseCards({ toggle, Open, title, description }) {
    return (
        <ul className='collapse-container'>
            <li className='collapse-unit'>
                <span className='collapse-unit-header'>
                    <p>{title}</p>
                    <FontAwesomeIcon className='icon' onClick={toggle} icon={faChevronDown} />
                </span>
                {Open &&
                    <span >
                        {description}
                    </span>}
            </li>
        </ul>
    )
}

export default CollapseCards