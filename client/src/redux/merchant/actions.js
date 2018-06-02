const actions = {
  SET_MERCHANT: 'SET_MERCHANT',

  setMerchant: (merchant) => ({
    type: actions.SET_MERCHANT,
    merchant
  }),
};

export default actions;
