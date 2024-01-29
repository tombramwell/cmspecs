import Head from 'next/head'
import Header from './Header'  

const Layout = ({ children }) => (
    <>      
    <Head>
    <title>Content Marketing Specifications</title>
    <meta name="description" content="Compare each Content Marketing package available" />
    </Head>
    <Header />
    {children}
    </>
)

export default Layout