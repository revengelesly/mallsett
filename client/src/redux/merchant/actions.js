const actions = {
  SET_MERCHANT: 'SET_MERCHANT',
  GET_MERCHANT: 'GET_MERCHANT',

  setMerchant: (merchant) => ({
    type: actions.SET_MERCHANT,
    merchant
  }),

  getMerchant: () => ({
    type: actions.GET_MERCHANT
  })
};

export default actions;
