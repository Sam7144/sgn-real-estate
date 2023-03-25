import Layout from '@/mainlayout/Layout'
import '@/styles/globals.css'
import '@/styles/header.scss'
import '@/styles/hero.scss'
import '@/styles/apart.scss'
import '@/styles/footer.scss'
import '@/styles/about.scss'
import '@/styles/contact.scss'
import '@/styles/faq.scss'
import '@/styles/props.scss'
export default function App({ Component, pageProps }) {
  return (
    
    <>
      <Layout>
      <Component {...pageProps} />

      </Layout>
    </>
    
  
  )
}