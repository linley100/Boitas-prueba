
// States
export const state = () =>({

    toggleSidebar: false,
    toggleSearch: false

})

// mutations
export const mutations = {

    TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !state.toggleSidebar
    },

    TOGGLE_SEARCH(state) {
        state.toggleSearch = !state.toggleSearch
    }

}

// actions
export const actions = {

    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },

    toggleSearch({ commit }) {
        commit('TOGGLE_SEARCH')
    }

}

// Getters
export const getters = {

    toggleSidebar: state => state.toggleSidebar,
    toggleSearch: state => state.toggleSearch,

}
