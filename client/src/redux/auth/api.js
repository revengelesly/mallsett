import axios from 'axios';
import { BaseURL } from '../../helpers/constants';

export function login(user) {
  const request = axios.post(`${BaseURL}/api/users/login`, { ...user });

  return request
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err.response);
      return err.data;
    });
}

export function createProfile(user) {
  console.log('create profile')
  return axios({
    method: 'POST',
    url: 'api/profile',
    headers: {
      Authorization: user.token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      profileType: 'main',
      status: 'active',
      handle: Date.now().toString(),
      displayName: user.profile.name,
      category: user.profile.category ? user.profile.category : 'self',
      ...user.profile
    }
  })
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err));
}

export function getProfileServer(user) {
  return axios({
    method: 'GET',
    url: 'api/profile',
    headers: {
      Authorization: user.token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.status === 204) {
      return createProfile(user);
    }
    return res.data;
  })
  .catch(err => {
    console.log(err);
  })
}
