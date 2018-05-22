const actions = {
  GET_MERCHANTS: 'GET_MERCHANTS',

  getMerchant: (merchants) => ({
    type: actions.GET_MERCHANTS,
    merchants
  }),
};

export default actions;
