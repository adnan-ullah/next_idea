import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  
  return (
    
  <Layout>
      <Component {...pageProps} />
  </Layout>)

}

export default MyApp
