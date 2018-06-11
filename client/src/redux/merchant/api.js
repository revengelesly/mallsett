import axios from 'axios';
import { BaseURL } from '../../helpers/constants';

export function getSuggestionsAPI (idToken) {
  return axios({
    method: 'GET',
    url: `${BaseURL}/api/merchants/suggestions`,
    headers: {
      Authorization: idToken,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.data)
  .catch(err => console.log(err));
}

export function getRemoteMerchant(payload) {
  return axios({
    method: 'GET',
    url: `${BaseURL}/api/merchant/${payload.profile._id}`,
    headers: {
      Authorization: payload.token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err));
}

