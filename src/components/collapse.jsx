import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import '../styles/collapse.css';

function Collapse() {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);
    return (
        <div className='collapse-container'>
            <div className='collapse-unit'>
                <div className='collapse-unit-header'>
                    <p>Fiabilité</p>
                    <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronDown} />
                </div>
            </div>
            <div className='collapse-unit'>
                <div className='collapse-unit-header'>
                    <p>Respect</p>
                    <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronDown} />
                </div>
            </div>
            <div className='collapse-unit'>
                <div className='collapse-unit-header'>
                    <p>Service</p>
                    <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronDown} />
                </div>
            </div>
            <div className='collapse-unit'>
                <div className='collapse-unit-header'>
                    <p>Responsabilité</p>
                    <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronDown} />
                </div>
            </div>

        </div>
    )
}

export default Collapse