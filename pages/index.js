import Layout from "../components/Layout";
import {API_URL} from "../config/index";

export default function Homepage(props) {
  console.log(props.events);
  return (
    <Layout title="Events Page">
      <h1>Music Events</h1>
      {props.events.map((event)=>{
        return<h3>{event.name}</h3>
      })}
    </Layout>
  );
}

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json();
  return{
    props:{events},
  };
}

