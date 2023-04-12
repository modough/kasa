import '../styles/collapse.css';
import CollapseCards from './CollapseCards';
import { collapseDataAbout } from '../utils/helpers';

function Collapse() {
    return (
        <section className='collapse-section about'>
            {
                collapseDataAbout.map((data) =>
                    <CollapseCards key={data.title} title={data.title} description={data.description} />
                )
            }
        </section>
    )
}
export default Collapse