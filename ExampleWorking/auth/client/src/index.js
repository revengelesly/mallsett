import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import registerServiceWorker from './registerServiceWorker';
import themes from './config/themes';
// import DashApp from './dashApp';
import AppLocale from './languageProvider';
import { themeConfig } from './config';
import DashAppHolder from './dashAppStyle';
import {AppRoutes} from './config/AppRoutes';
import {store} from './store/index';
import {Provider} from 'react-redux';

const currentAppLocale = AppLocale.en;

ReactDOM.render(
  <Provider store={store} >
    <LocaleProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={themes[themeConfig.theme]}>
          <DashAppHolder>
            <AppRoutes />
          </DashAppHolder>
        </ThemeProvider>
      </IntlProvider>
    </LocaleProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./config/AppRoutes', () => {
    const NextApp = require('./config/AppRoutes').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
export { AppLocale };
