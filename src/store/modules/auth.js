import axios from 'axios'

export default {
    namespaced: true,
    state: {
        user: null,
        isAuthResolved: false
    },
    getters: {
        authUser (state) {
            return state.user || null
        },
        isAuthenticated (state) {
            return !!state.user
        }
    },
    actions: {
        loginWithEmailAndPassword ({ commit }, userData) {
            axios.post('/api/v1/users/login', userData)
                .then(res => {
                    const user = res.data
                    commit('setAuthUser',user)
                })
        },
        logout ({ commit }) {
            return axios.post('/api/v1/users/logout')
                .then(() => {
                    commit('setAuthUser', null)
                    return true
                })
                .catch(err => {
                    return err
                })
        },
        registerUser (context, userData) {
            axios.post('/api/v1/users/register', userData)
        },
        getAuthUser ({ commit, getters }) {
            const authUser = getters['authUser']
            if(authUser) { return Promise.resolve(authUser) }

            const config = {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            }

            return axios.get('/api/v1/users/me', config)
                .then(res => {
                    const user = res.data
                    commit('setAuthUser', user)
                    commit('setAuthState', true)
                    return user
                })
                .catch(err => {
                    commit('setAuthUser', null)
                    commit('setAuthState', true)
                    return err
                })
        }
    },
    mutations: {
        setAuthUser(state, user) {
            state.user = user
        },
        setAuthState(state, authState) {
            state.isAuthResolved = authState
        }
    }
}