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
        fetchThreads ({ state, commit }, meetupId) {
            return axios.get(`/api/v1/threads?meetupId=${meetupId}`)
                .then(res => {
                    const threads = res.data
                    commit('setItems', { resource: 'threads', items: threads }, { root: true })
                    return state.items
                })
        }
    },
    //Simple functions to mutate a state
    mutations: {

    }
}