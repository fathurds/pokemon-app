import Layout from '../components/Layout'
import '../styles/globals.css'
import NavbarComponent from "../components/Navbar"
import FooterComponent from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavbarComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </Layout>
  )
}

export default MyApp
