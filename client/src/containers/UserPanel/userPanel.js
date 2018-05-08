import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import { Icon } from 'antd';

import RegisterUser from './Forms/RegisterUser';
import LoginUser from './Forms/LoginUser';
import RequestUserPassword from './Forms/RequestUserPassword';
import SettingsUser from './Forms/SettingsUser';
import ItemUser from './Lists/ItemUser';
import Dependents from './Forms/Dependents';
import Location from './Forms/Location';

import TabsComponents from '../Topbar/tabsComponents';

export default class UserPanel extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        data: [ 
         {
          header: "My Dependents",
          icon: "usergroup-add",
          nav: "Add Dependents",
          form:  <Dependents />,
          item: <ItemUser />,
          formWidth: "12",
          itemWidth: '12'
        }      ,    
        {
          header: "My Locations",
          icon: "environment-o",
          nav: "Delivery Locations",
          form:  <Location />,
          item: <ItemUser />,
          formWidth: "12",
          itemWidth: '12'
        }  ,

        {
          icon: "lock",
          nav: "Register",
          header: "Register",
          form:  <RegisterUser />,
          item: <ItemUser />,
          formWidth: "12",
          itemWidth: '12'
        },
        {
          nav: "Login",
          icon: "unlock",
          header: "Login",
          form:  <LoginUser />,
          item: <ItemUser />,
          formWidth: "12",
          itemWidth: '12'
        } ,
        {
          header: "Forgot Password",
          icon: "question-circle-o",
          nav: "Forgot Password",
          form:  <RequestUserPassword />,
          item: <ItemUser />,
          formWidth: "12",
          itemWidth: '12'
        } ,
         {
          header: "Account Settings",
          icon: "tool",
          nav: "Account Settings",
          form:  <SettingsUser />,
          item: <ItemUser />,
          formWidth: "12",
          itemWidth: '12'
        } 
        ]
      };
    }

  render(props){
    return (
      <LayoutWrapper>
        <Box >
          <div className="card-container">
          
            <Tabs
              defaultActiveKey="1"
              tabPosition="right"
            >
              {this.state.data.map((compData, i) => (
              <TabPane   tab={<span><Icon type={compData.icon} />{compData.nav}</span>} key={i}>
                <TabsComponents key={i} data={compData} />
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
