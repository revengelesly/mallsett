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
        activeTab: '1',
        itemActiveTab: '1',
        tabMenuPositon: 'top'
      };
    }

  handleTabChange = (key) => {
    this.setState({
      activeTab: key
    });
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

  render(props){
    let data = [
      {
        header: "My Dependents",
        icon: "usergroup-add",
        nav: "Dependents",
        form:  <Dependents handleItemActiveTab={this.handleItemActiveTab} />,
        item: <WrapDependentItems activeKey={this.state.itemActiveTab} />,
        formWidth: "12",
        itemWidth: '12'
      }      ,
      {
        header: "My Locations",
        icon: "environment-o",
        nav: "Locations",
        form:  <Location handleItemActiveTab={this.handleItemActiveTab} />,
        item: <WrapLocationItems activeKey={this.state.itemActiveTab} />,
        formWidth: "12",
        itemWidth: '12'
      }  ,
      {
        header: "My Files and Documents",
        icon: "paper-clip",
        nav: "Documents",
        form:  <FileManagement handleItemActiveTab={this.handleItemActiveTab} />,
        item: <WrapFileItems activeKey={this.state.itemActiveTab} />,
        formWidth: "12",
        itemWidth: '12'
      }  ,
      {
        icon: "lock",
        nav: "Register",
        header: "Register",
        form:  <RegisterUser  handleTabChange={this.handleTabChange} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12'
      },
      {
        nav: "Login",
        icon: "unlock",
        header: "Login",
        form:  <LoginUser  handleTabChange={this.handleTabChange} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12'
      } ,
      {
        header: "Forgot Password",
        icon: "question-circle-o",
        nav: "Forgot Password",
        form:  <RequestUserPassword  handleTabChange={this.handleTabChange} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12'
      } ,
       {
        header: "Account Settings",
        icon: "tool",
        nav: "Settings",
        form:  <SettingsUser />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12'
      }
    ]
    return (
      <LayoutWrapper>
        <Box >
          <div className="card-container">

            <Tabs
              defaultActiveKey="1"
              tabPosition={this.state.tabMenuPositon}
              size="small"
              activeKey={this.state.activeTab}
              onChange={this.handleTabChange}
            >
              {data.map((compData, i) => (
              <TabPane   tab={<span><Icon type={compData.icon} />{compData.nav}</span>} key={i}>
                <TabsComponents key={i} data={compData} itemActiveTab={this.state.itemActiveTab} />
              </TabPane>
              ))}
              <TabPane  tab={<span><Icon type="logout" />Logout</span>} key='logout'>

              </TabPane>
            </Tabs>
          </div>
        </Box>
      </LayoutWrapper>
    );
  }
  }
