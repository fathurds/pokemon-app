import Layout from '../components/Layout'
import NavbarComponent from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavbarComponent />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
