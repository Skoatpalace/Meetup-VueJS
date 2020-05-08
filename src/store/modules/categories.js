import axios from 'axios'

export default {
    namespaced: true,
    //In state we are keeping  our data we are sharing whith our components
    state: {
        items: []
    },
    //Getters are like computed properties. Simple functions to get a state
    getters: {

    },
    //Actions are like methods in vue components. They should  not mutate the state.
    //Very good spot to fetch data. Action call usualy should resolve into data.
    actions: {
        fetchCategories ({ state, commit }) {
            return axios.get("api/v1/categories")
                .then(res => {
                    const categories = res.data
                    commit('setItems', { resource: 'categories', items: categories }, { root: true })
                    return state.items
                });
        }
    },
    //Simple functions to mutate a state
    mutations: {

    }
}