export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make ansyc call to db
    dispatch({type: 'CREATE_PROJECT', project})
  }
};
