const actions = {
  SET_CONTENT: 'SET_CONTENT',
  GET_CONTENT: 'GET_CONTENT',

  setContent: (contents) => ({
    type: actions.SET_CONTENTS,
    contents
  }),

  getContents: () => ({
    type: actions.GET_CONTENT
  })
};
export default actions;
