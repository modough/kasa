import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import '../styles/homePage.css'
import Cards from "../components/cards"

function Home() {
    return (
        <section className="homePage">
            <Header classTypeHome={'home'} />
            <Banner />
            <Cards />
            <Footer />
        </section>
    )
}
export default Home