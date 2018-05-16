import axios from 'axios';

export function login(user) {
  const request = axios.post('/api/users/login', {...user});

  return request
      .then(res => {
        return(res.data);
      })
      .catch(err => {
        console.log(err.response);
        return(err.data);
      });
}
