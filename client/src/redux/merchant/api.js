import axios from 'axios';
import { BaseURL } from '../../helpers/constants';

export function getAssociatesInfo(merchant) {
  return axios({
    method: 'GET',
    url: `${BaseURL}/api/merchant/`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.data){
      let associates = merchant.associates;
      let result = [];

      for (let associate in associates) {
        if (associate) {
          let data = res.data.find(x => x.id === associate.merchantId);

          if (data) {
            result.push({ ...data.place, category: associate.category });
          }
        }
      }

      merchant.associates = result;

      return merchant;
    }
  })
  .catch(err => console.log(err));
}
