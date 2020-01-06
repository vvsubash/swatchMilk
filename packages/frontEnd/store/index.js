import firebase from 'firebase'
// import { vuexfireMutations, firestoreAction } from 'vuexfire'
// import db from '~/plugins/firebaseImport'
export const state = () => ({
  user: null
  // animals: []
})

export const getters = {
  getterValue: (state) => {
    return state.value
  }
}

export const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  }
  // ...vuexfireMutations
}

export const actions = {
  signInWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    // provider.addScope('https://www.googleapis.com/auth/calendar')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = result.user
        commit('setUser', user.displayName)
        // eslint-disable-next-line
        console.log(result)
      })
      .catch(function(error) {
        // eslint-disable-next-line
        console.log(error.code)
        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // // The email of the user's account used.
        // const email = error.email
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential
        // ...
      })
  }
  //   SignOut({ commit }) {
  //     firebase
  //       .auth()
  //       .signOut()
  //       .then(() => {
  //         // eslint-disable-next-line
  //         console.log('signed out')
  //       })
  //     commit('setUser', null)
  //   },
  //   initStore: firestoreAction(({ bindFirestoreRef }) => {
  //     bindFirestoreRef(
  //       'animals',
  //       db.collection('users/UCNOln8XPzN4rTNnfn57lUjQ8Zb2/cows')
  //     )
  //   })
}
