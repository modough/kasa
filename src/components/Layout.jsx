import Header from './Header'
import Footer from './Footer'
import { Fragment, useEffect, useState } from "react"
import LoadingPage from '../pages/LoadingPage'


function Layout({ children }) {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(!isLoading)
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <Fragment>
            {
                !isLoading ?
                    <LoadingPage />
                    :
                    <Fragment>
                        <Header />
                        {children}
                        <Footer />
                    </Fragment>
            }
        </Fragment>
    )
}
export default Layout
