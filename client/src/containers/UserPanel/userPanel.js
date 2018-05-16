import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import { Icon } from 'antd';

import RegisterUser from './Forms/RegisterUser';
import LoginUser from './Forms/LoginUser';
import RequestUserPassword from './Forms/RequestUserPassword';
import SettingsUser from './Forms/SettingsUser';
import WrapAboutUsItems from './Lists/WrapAboutUsItems';
import WrapLocationItems from './Lists/WrapLocationItems';
import WrapFileItems from './Lists/WrapFileItems';
import WrapDependentItems from './Lists/WrapDependentItems';
import Dependents from './Forms/Dependents';
import Location from './Forms/Location';
import FileManagement from './Forms/FileManagement';

import TabsComponents from '../Topbar/tabsComponents';
import { getView } from '../../helpers/utility';
import { ViewPort } from '../../helpers/constants';

export default class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.isLoggedIn ? '1' : '4',
      itemActiveTab: '1',
      tabMenuPositon: 'top'
    };
  }
  LOG_OUT = 'logout';

  handleTabChange = (key) => {
    if (key === this.LOG_OUT) {
      this.props.logout();
    } else {
      this.setState({
        activeTab: key
      });
    }
  }

  handleItemActiveTab = (key) => {
    this.setState({
      itemActiveTab: key
    });
  }

  handleWindowResize = () => {
    this.setState({
      tabMenuPositon: getView() === ViewPort.DesktopView ? 'right' : 'top'
    });
  }

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      if (this.props.isLoggedIn) {
        this.handleTabChange('1');
      } else {
        this.handleTabChange('4');
      }
    }
  }

  render(props){
    let data = [
      {
        header: "My Dependents",
        icon: "usergroup-add",
        nav: "Dependents",
        form:  <Dependents handleItemActiveTab={this.handleItemActiveTab} />,
        item: <WrapDependentItems activeKey={this.state.itemActiveTab} />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }      ,
      {
        header: "My Locations",
        icon: "environment-o",
        nav: "Locations",
        form:  <Location handleItemActiveTab={this.handleItemActiveTab} />,
        item: <WrapLocationItems activeKey={this.state.itemActiveTab} />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }  ,
      {
        header: "My Files and Documents",
        icon: "paper-clip",
        nav: "Documents",
        form:  <FileManagement handleItemActiveTab={this.handleItemActiveTab} />,
        item: <WrapFileItems activeKey={this.state.itemActiveTab} />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }  ,
      {
        icon: "lock",
        nav: "Register",
        header: "Register",
        form:  <RegisterUser login={this.props.login} handleTabChange={this.handleTabChange} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: !this.props.isLoggedIn
      },
      {
        nav: "Login",
        icon: "unlock",
        header: "Login",
        form:  <LoginUser login={this.props.login} handleTabChange={this.handleTabChange} idToken={this.props.idToken} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: !this.props.isLoggedIn
      } ,
      {
        header: "Forgot Password",
        icon: "question-circle-o",
        nav: "Forgot Password",
        form:  <RequestUserPassword  handleTabChange={this.handleTabChange} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: !this.props.isLoggedIn
      } ,
       {
        header: "Account Settings",
        icon: "tool",
        nav: "Settings",
        form:  <SettingsUser login={this.props.login} profile={this.props.profile} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }
    ]
    return (
      <LayoutWrapper>
        <Box >
          <div className="card-container">

            <Tabs
              tabPosition={this.state.tabMenuPositon}
              size="small"
              activeKey={this.state.activeTab}
              onChange={this.handleTabChange}
            >
              {data.map((compData, i) => (
                compData.isDisplay &&
              <TabPane   tab={<span><Icon type={compData.icon} />{compData.nav}</span>} key={i}>
                <TabsComponents key={i} data={compData} itemActiveTab={this.state.itemActiveTab} />
              </TabPane>
              ))}

              {this.props.isLoggedIn &&
                <TabPane  tab={<span><Icon type="logout" />Logout</span>} key={this.LOG_OUT} />
              }
            </Tabs>
          </div>
        </Box>
      </LayoutWrapper>
    );
  }
  }
