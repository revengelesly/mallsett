import axios from 'axios';
import { BaseURL } from '../../helpers/constants';

export function login(user) {
  const request = axios.post(`${BaseURL}/api/users/login`, {...user});

  return request
      .then(res => {
        return(res.data);
      })
      .catch(err => {
        console.log(err.response);
        return(err.data);
      });
}
