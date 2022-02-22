import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

export default function Blog(props) {
  const {data} = props;
  return (
    <Layout pageTitle='Blog Page'>
      {
        data.map((blog) => {
          return (
            <div className={styles.card} key={blog.id}>
              <h4>Title : {blog.title}</h4>
              <p>{blog.body}</p>
            </div>
          )
        })
      } 
    </Layout>

    // <div>
    //   <Header />
    //   <p>this is blog page</p>
    //   <main style={{height:400}}>

    //   </main>
    //   <Footer />
    // </div>
  )
}

export async function getServerSideProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();

  return {
    props: {
      data: data,
    }
  }
}