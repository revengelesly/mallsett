import {BaseURL} from '../helpers/constants';
import axios from 'axios';

export const addAssociate = (idToken, merchant, business, callback) => {
  axios({
    method: 'POST',
    url: `${BaseURL}/api/merchant/addassociate`,
    headers: {
      Authorization: idToken,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      ...business,
      merchant_id: merchant._id
    }
  })
    .then(res => {
      callback(res.data);
    })
    .catch(err => console.log(err));
}


export const createBusiness = (place, googlePlaceId, category) => {
  if (place) {
    let name = place.name;
    let address = place['formatted_address'];
    let phone = place['formatted_phone_number'];
    let photoSource =
      place['photos'] && place['photos'][0]
        ? place['photos'][0].getUrl({ maxWidth: 320, maxHeight: 250 })
        : '';
    let types = place['types']
      ? place['types'].map(x =>
          x.replace(/_/g, ' ').replace(/\w\S*/g, matched => {
            return (
              matched.charAt(0).toUpperCase() +
              matched.substr(1).toLowerCase()
            );
          })
        )
      : [];

    if (name && (address || phone || types)) {
      return {
        lattitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
        googlePlaceId: googlePlaceId,
        businessName: name,
        address: address || '',
        phone: phone || '',
        googlePlaceCategories: types || '',
        category: category,
        photo: photoSource
      };
    }

    return null;
  }
};
