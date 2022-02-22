import Layout from '../../components/Layout';

import {useRouter} from 'next/router';

export default function Users(props) {
  const router = useRouter();
  
  const { dataUsers } = props;
  console.log(dataUsers[0].name)
  return (
    <Layout pageTitle='Users Page'>
      <h1>halo</h1>
      {dataUsers.map((user, index) => {
        return (
          <div key={index} onClick={() => router.push(`/users/${user.id}`)} style={{cursor: 'pointer'}}>

            <p >{user.name} <span style={{ fontWeight: 700 }}>{user.email}</span></p>
          </div>
        );

      })}
    </Layout>
    // <div>
    //   <Header></Header>
    //   <p>index Users Page</p>
    //   <main style={{height:400}}>

    //   </main>
    //   <Footer />
    //   </div>
  );
}

// getStaticProps untuk data fetching data yang jarang berubah, karena datanya ketika dibuild tidak bisa
// dirubah secara server, tapi harus di build ulang lagi
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}


