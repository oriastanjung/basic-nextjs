import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Users(props) {
  const {user} = props;
  // const routerDariTitle = useRouter();
  // const { id } = routerDariTitle.query;
  console.log(user);
  return (
    <Layout pageTitle={'users'}>
      {/* <p>Users Page dengan id : {id}</p> */}
      <p>nama : {user.name} </p>
      <p>email : {user.email} </p>
      <p>phone : {user.phone} </p>


    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const dataUsers = await res.json();

  return {
    props: {
      user: dataUsers,
    }
  }

}