import { Map } from 'immutable';
import { ViewPort } from './constants';

export function clearToken() {
  localStorage.removeItem('id_token');
  clearMerchant();
}

export function clearMerchant() {
  localStorage.removeItem('merchant');
}

export function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    return new Map({ idToken });
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function getProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem('profile'));
    return new Map({ profile });
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();
  const numberEnding = number => {
    return number > 1 ? 's' : '';
  };
  const number = num => num > 9 ? '' + num : '0' + num;
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
      if (days < 28) {
        return days + ' day' + numberEnding(days);
      } else {
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }
    return 'a few seconds ago';
  };
  return getTime();
}

export function getAgeStatement(contents, age) {
  console.log(age);
  contents = {
    "0": [
        "You are a baby"
    ],
    "5": [
        "You are still a baby"
    ],
    "10": [
        "You are getting big"
    ],
    "15": [
        "You are getting big"
    ],
    "18": [
        "You are an adult"
    ],
    "21": [
        "You are are twenty",
        "do something with your life"
    ],
    "45": [
        "You are fourtyFive",
        "You are almost very old"
    ],
    "55": [
        "You are mature",
        "you are very old"
    ],
    "65": [
        "You are retired",
        "Thank you for your contribution to our society"
    ]
  };

  return contents['' + age] ? contents['' + age].join(' ') : '';
}

export function getView(width) {
  width = width || window.innerWidth;
  let newView = ViewPort.MobileView;
  if (width > 1220) {
    newView = ViewPort.DesktopView;
  } else if (width > 767) {
    newView = ViewPort.TabView;
  }
  return newView;
}
