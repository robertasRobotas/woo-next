import Head from 'next/head';
import Header from './Header';


const Layout = (props) =>{
      return(
            <>
            <Head>
                  <link rel="stylesheet" href="https://bootswatch.com/5/darkly/bootstrap.min.css"/>
            </Head>
            <Header/>
            {props.children}
            </>
      )
}

export default Layout;