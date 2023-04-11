import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function CollapseCards({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <section className='collapse-container'>
            <div className='collapse-unit' onClick={toggleMenu} role='button'>
                <span className='collapse-unit-header'>
                    <p>{title}</p>
                    {
                        isOpen ?
                            <FontAwesomeIcon className='icon' icon={faChevronUp} /> :
                            <FontAwesomeIcon className='icon' icon={faChevronDown} />
                    }
                </span>
            </div>
            {
                isOpen &&
                <div className="collapse-description-container">
                    <span className='collapse-description'>
                        {description}
                    </span>
                </div>
            }
        </section>
    )
}
export default CollapseCards