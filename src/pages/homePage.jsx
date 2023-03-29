import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import { Fragment } from "react"
import Cards from "../components/cards"

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <Cards />
            <Footer />
        </Fragment>
    )
}
export default Home