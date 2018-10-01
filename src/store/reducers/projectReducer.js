const initState = {
  projects: [
    {id: 1, title: 'help my find a friend', content: 'fuck you'},
    {id: 2, title: 'collect all the starts', content: 'fack you so much'},
    {id: 3, title: 'egg hunt Tomek', content: 'yo yo yo'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('creatted project', action.project)
  }
  
  return state;
}

export default projectReducer
