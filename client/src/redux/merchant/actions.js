const actions = {
  SET_MERCHANT: 'SET_MERCHANT',
  GET_MERCHANT: 'GET_MERCHANT',
  SET_ASSOCIATES: 'SET_ASSOCIATES',
  SET_SUGGESTIONS: 'SET_SUGGESTIONS',

  setMerchant: (merchant) => ({
    type: actions.SET_MERCHANT,
    merchant
  }),

  getMerchant: () => ({
    type: actions.GET_MERCHANT
  }),

  getAssociate: (merchant) => ({
    type: actions.SET_ASSOCIATES,
    merchant
  }),

  setSuggestions: (suggestions) => ({
    type: actions.SET_SUGGESTIONS,
    suggestions
  })
};

export default actions;
