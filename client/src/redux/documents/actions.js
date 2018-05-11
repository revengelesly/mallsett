const actions = {
  ADD_FILE: 'ADD_FILE',
  ADD_FILE_SUCCESS: 'ADD_FILE_SUCCESS',
  ADD_FILE_FAILED: 'ADD_FILE_FAILED',
  addFile: (file) => ({
    type: actions.ADD_FILE_SUCCESS,
    file,
  }),
  addFileFailed: (error) => ({
    type: actions.ADD_FILE_FAILED,
    error,
  })
};
export default actions;
