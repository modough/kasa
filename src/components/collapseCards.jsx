import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function CollapseCards({ title, description }) {
    const [Open, setOpen] = useState(false)
    const toggleMenu = () => setOpen(!Open)

    return (
        <ul className='collapse-container'>
            <li className='collapse-unit' onClick={toggleMenu}>
                <span className='collapse-unit-header'>
                    <p>{title}</p>
                    {Open ?
                        <FontAwesomeIcon className='icon' icon={faChevronUp} /> :
                        <FontAwesomeIcon className='icon' icon={faChevronDown} />
                    }
                </span>
            </li>
            {Open &&
                <span className='collapse-description'>
                    {description}
                </span>
            }
        </ul>
    )
}

export default CollapseCards