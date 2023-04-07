import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/lightbox.css';
import { Fragment, useState } from 'react';

function Lightbox({ findApart }) {
    const images = findApart.pictures;
    const imageArrayLength = findApart.pictures.length;
    const [clicked, setClicked] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollLightboxImagesRight = () => {
        if (currentIndex + 1 >= imageArrayLength) {
            setCurrentIndex(0);
            setClicked(images[0]);
            return;
        }
        const nextImage = images.filter((elmt) => {
            return images.indexOf(elmt) === currentIndex + 1;
        })
        console.log(nextImage[0])
        setCurrentIndex(currentIndex + 1);
        setClicked(nextImage[0]);
    }

    const scrollLightboxImagesLeft = () => {
        if (currentIndex === 0) {
            setCurrentIndex(imageArrayLength - 1);
            setClicked(images[imageArrayLength - 1]);
            console.log(images[imageArrayLength - 1])
            return;
        }
        const prevImage = images.filter((elmt) => {
            return images.indexOf(elmt) === currentIndex - 1;
        })
        console.log(prevImage[0])
        setCurrentIndex(currentIndex - 1);
        setClicked(prevImage[0]);
    }
    return (
        <section className="lightbox-container">
            <div className="lightbox">
                <div className="lightbox-image">
                    <img src={clicked} alt="lightbox image" />
                </div>
                {
                    imageArrayLength > 1 ?
                        <Fragment>
                            <FontAwesomeIcon className='icon left' icon={faChevronLeft} onClick={() => scrollLightboxImagesLeft()} />
                            <FontAwesomeIcon className='icon right' icon={faChevronRight} onClick={() => scrollLightboxImagesRight()} />
                            <p className='lightbox-image-number'>{`${currentIndex + 1}/${imageArrayLength}`}</p>
                        </Fragment> : null
                }
            </div>
        </section>
    )
}
export default Lightbox