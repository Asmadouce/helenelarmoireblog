import axios from 'axios';


export default function ( {store} ) {
    return axios.get(`http://192.168.1.30/newMoon/index.php/wp-json/wp/v2/posts`)
        .then((response)=>{
            store.commit('getPosts', response.data);
        });
}