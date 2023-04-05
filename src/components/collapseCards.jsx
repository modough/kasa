import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function CollapseCards({ title, description }) {
    const [Open, setOpen] = useState(false)
    const toggleMenu = () => setOpen(!Open)

    return (
        <section className='collapse-container'>
            <div className='collapse-unit' onClick={toggleMenu}>
                <span className='collapse-unit-header'>
                    <p>{title}</p>
                    {Open ?
                        <FontAwesomeIcon className='icon' icon={faChevronUp} /> :
                        <FontAwesomeIcon className='icon' icon={faChevronDown} />
                    }
                </span>
            </div>
            {Open &&
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