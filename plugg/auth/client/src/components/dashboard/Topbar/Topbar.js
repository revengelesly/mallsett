import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
// import appActions from '../../redux/app/actions';
import TopbarWrapper from './topbar.style';
import { getCurrentTheme } from '../../../containers/ThemeSwitcher/config';
import { themeConfig } from '../../../config';
import Logo from '../../utility/logo';
import { Link } from 'react-router-dom';
import TopbarAddressSelector from '../../topbar/topbarAddressSelector'; 
import TopbarUserSessions from '../../topbar/topbarUserSessions'; 
import TopbarAddBusiness from '../../topbar/topbarAddBusiness'; 
import {
  TopbarSearch,
  TopbarUser
} from '../../topbar';

const { Header } = Layout;
// const { toggleCollapsed } = appActions;

class Topbar extends Component {
  render() {
    // const { toggleCollapsed } = this.props;
    const customizedTheme = getCurrentTheme('topbarTheme', themeConfig.theme);
    // const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            'isomorphicTopbar'
          }
        >
          <div className="isoLeft">
            
            <Logo />
          </div>

          <ul className="isoRight">
            <li className="isoSearch navList">
              <TopbarAddressSelector />
             
            </li>
            <li>
            <Link to="/dashboard" >
           <i className="ion-briefcase small-margin-right "/> Business Panel
            </Link>
            
            </li>
            <li>
            <Link to="/dashboard" >
              <TopbarAddBusiness />
            </Link>
            
            </li>
            <li className="isoSearch navList">
              <TopbarUserSessions />
             
            </li>
            <li>
            <Link to="/signin" onClick={()=> localStorage.removeItem('accesstoken')} >
           <i className="ion-briefcase small-margin-right "/> Logout
            </Link>
            
            </li>
            <li
              className="isoUser"
            >
              <TopbarUser />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default Topbar

