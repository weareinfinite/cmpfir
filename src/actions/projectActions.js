import { ADD_PROJECT, FETCH_PROJECS } from './actionTypes'
import { store } from '../db/firebase'

// Create project

export const createProject = project => {
  project.created_at = new Date()
  return store.collection('projects').add(project)
}

// Fetch project
export const fetchProject = () => {
  return dispatch => {
    store.collection('projects').get().then(querySnapshot => {
      let data = []

      querySnapshot.forEach(doc => {
        let d = doc.data()
        d = { ...d, id: doc.id }
        data.unshift(d)
      })

      dispatch({ type: FETCH_PROJECS, data: data })
    })
  }
}
