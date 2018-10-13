const initialState = {
  projects: [
    { id: 1, title: 'Project 1', content: 'Project 1 Content' },
    { id: 2, title: 'Project 2', content: 'Project 2 Content' },
    { id: 3, title: 'Project 3', content: 'Project 3 Content' }
  ]
}

const projectReducer = (state = initialState, action) => {
  return state
}

export default projectReducer
