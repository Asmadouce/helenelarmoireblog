import Vuex from 'vuex'


//STATE
const state = {
    items: [],
    pages: []
}
//MUTATIONS
const mutations = {
    getPosts(state, response ) {
        this.state.items = response;
    },
    getPages(state, response ) {
    this.state.pages = response;
  }
}
//GETTERS
const getters = {
    getPost: (state) => (slug) =>{
        return state.items.find(item => item.slug === slug)

    },
    getPage: (state) => (slug) =>{
    return state.pages.find(page => page.slug === slug)

  }
}


let store = () => {
    return new Vuex.Store({
        state: state,
        mutations: mutations,
        getters: getters,

    })
}

global.store = store

export default store
