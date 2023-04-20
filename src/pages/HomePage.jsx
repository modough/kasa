import { lazy, Suspense } from 'react'
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import LoadingPage from "../components/Loading"



function Home() {
    const Cards = lazy(() => import('../components/Cards.jsx'))
    return (
        <section className="homePage">
            <Layout>
                <Banner />
                <Suspense fallback={<LoadingPage />}>
                    <Cards />
                </Suspense>
            </Layout>
        </section>
    )
}
export default Home