import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import TopbarWrapper from './topbar.style';
import Logo from '../../components/utility/logo';
import { Link } from 'react-router-dom';
import TopbarAddressSelector from '../../components/topbar/topbarAddressSelector'; 
import TopbarUserSessions from '../../components/topbar/topbarUserSessions'; 
import TopbarAddBusiness from '../../components/topbar/topbarAddBusiness'; 
import {
  TopbarSearch,
  TopbarUser
} from '../../components/topbar';

const { Header } = Layout;

class Topbar extends Component {
  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: '#fff',
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
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
            <Link to="/dashboard" onClick={toggleCollapsed}>
           <i className="ion-briefcase small-margin-right "/> Business Panel
            </Link>
            
            </li>
            <li>
            <Link to="/dashboard" onClick={toggleCollapsed}>
              <TopbarAddBusiness />
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

export default connect(
  state => ({
    ...state.App.toJS(),
  })
)(Topbar);

