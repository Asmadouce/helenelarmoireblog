import axios from 'axios';


export default function ( {store} ) {
  return axios.get(`http://192.168.1.30/newMoon/index.php/wp-json/wp/v2/pages`)
    .then((response)=>{
      store.commit('getPages', response.data);
    });
}
