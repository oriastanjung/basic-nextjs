
import Layout from '../components/Layout';
import Image from 'next/image';

const Home = () => {
  return (
    <>
    
    <Layout pageTitle='Homepage'>
      <h1>this is homepage</h1>
    <Image src='/bground.png' width={500} height={300} />
    <img src='./bground.png' alt='' style={{width: 500, height: 300}} />
      </Layout>
    {/* <h1>this is homepage</h1>
      <Header />
      <main style={{height:400}}>

      </main>
      <Footer /> */}
    </>

  )
}

export default Home
