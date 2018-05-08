import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Layout, LocaleProvider } from 'antd';
// import { IntlProvider } from 'react-intl';
import { Debounce } from 'react-throttle';
import { WindowResizeListener } from 'react-window-resize-listener';
// import { ThemeProvider } from 'styled-components';
// import authAction from '../../redux/auth/actions';
// import appActions from '../../redux/app/actions';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
// import AppRouter from './AppRouter';
import { siteConfig } from '../../../config';
import { AppLocale } from '../../../index';
// import themes from '../../config/themes';
// import { themeConfig } from '../../config';
// import AppHolder from './commonStyle';
import './global.css';
import { DashboardRoute } from '../../../config/AppRoutes';

const { Content, Footer } = Layout;
// const { logout } = authAction;
// const { toggleAll } = appActions;
export default class App extends Component {
    render() {
        // const { url } = this.props.match;
        const currentAppLocale = AppLocale.en;
        return (

            <Layout style={{ height: '100vh' }}>
                {/* <Debounce time="1000" handler="onResize">
                    <WindowResizeListener
                        // onResize={windowSize =>
                        //     this.props.toggleAll(
                        //         windowSize.windowWidth,
                        //         windowSize.windowHeight
                        //     )}
                    />
                </Debounce> */}
                {/* <h1>Hello World</h1> */}
                <Topbar  />
                <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                    {/* <Sidebar /> */}
                    <Layout
                        className="isoContentMainLayout"
                        style={{
                            height: '100vh',
                        }}
                    >
                        <Content
                            className="isomorphicContent"
                            style={{
                                padding: '50px 0 0',
                                flexShrink: '0',
                                background: '#f1f3f6',
                            }}
                        >
                            {/* <DashboardRoute /> */}
                            {/* <h1>Helllo World</h1> */}
                        </Content>
                        <Footer
                            style={{
                                background: '#ffffff',
                                textAlign: 'center',
                                borderTop: '1px solid #ededed',
                            }}
                        >
                            {siteConfig.footerText}
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>

        );
    }
}
