import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import config from '../config/firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

export const store = firestore
export const auth = firebase.auth()
