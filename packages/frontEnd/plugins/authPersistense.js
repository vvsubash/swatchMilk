import firebase from 'firebase/app'
import 'firebase/auth'
const auth = firebase.auth()

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return resolve(store.commit('setUser', user.uid))
      }
      return resolve()
    })
  })
}
