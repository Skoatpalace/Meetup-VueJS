import axios from 'axios'

export default {
    namespaced: true,
    //In state we are keeping  our data we are sharing whith our components
    state: {
        items: [],
        item: {}
    },
    //Getters are like computed properties. Simple functions to get a state
    getters: {

    },
    //Actions are like methods in vue components. They should  not mutate the state.
    //Very good spot to fetch data. Action call usualy should resolve into data.
    actions: {
        fetchMeetups ({ state, commit }) {
            commit('setItems', { resource: 'meetups', items: [] }, { root: true })
            return axios.get("api/v1/meetups")
                .then(res => {
                    const meetups = res.data
                    commit('setItems', { resource: 'meetups', items: meetups }, { root: true })
                    return state.items
                });
        },
        fetchMeetupById ({ state, commit }, meetupId) {
            commit('setItem', { resource: 'meetups', item: {} }, { root: true })
            return axios.get(`/api/v1/meetups/${meetupId}`)
                .then(res => {
                     const meetup = res.data
                     commit('setItem', { resource: 'meetups', item: meetup }, { root: true })
                     return state.item
                 })
        }
    },
    //Simple functions to mutate a state
    mutations: {

    }
}