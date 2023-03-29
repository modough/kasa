import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import '../styles/collapse.css';

function Collapse() {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);
    return (
        <ul className='collapse-container'>
            <li className='collapse-unit'>
                <span className='collapse-unit-header'>
                    <p>Fiabilité</p>
                    <FontAwesomeIcon key={1} onClick={toggleMenu} style={{ color: 'white' }} icon={faChevronDown} />
                </span>
                {isOpen && (
                    <span key={1}>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </span>
                )}
            </li>
            <li className='collapse-unit'>
                <span className='collapse-unit-header'>
                    <p>Respect</p>
                    <FontAwesomeIcon onClick={toggleMenu} style={{ color: 'white' }} icon={faChevronDown} />
                </span>
                {isOpen && (
                    <span>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </span>
                )}
            </li>
            <li className='collapse-unit'>
                <span className='collapse-unit-header'>
                    <p>Service</p>
                    <FontAwesomeIcon onClick={toggleMenu} style={{ color: 'white' }} icon={faChevronDown} />
                </span>
                {isOpen && (
                    <span>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </span>
                )}
            </li>
            <li className='collapse-unit'>
                <span className='collapse-unit-header'>
                    <p>Responsabilité</p>
                    <FontAwesomeIcon onClick={toggleMenu} style={{ color: 'white' }} icon={faChevronDown} />
                </span>
                {isOpen && (
                    <span>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </span>
                )}
            </li>
        </ul>
    )
}

export default Collapse