import { store } from './store';
import authActions from './auth/actions';
import merchantActons from './merchant/actions';
import contentActions from './content/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
    store.dispatch(merchantActons.getMerchant());
    store.dispatch(contentActions.getContents());
  });
