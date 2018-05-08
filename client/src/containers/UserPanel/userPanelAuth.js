import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

import CreateUser from './Forms/CreateUser';
import ItemUser from './Lists/ItemUser';

import TabsComponents from '../Topbar/tabsUser';

const UserPanelTab = () => {

    return (
     <Tabs tabPosition='top'>
      <TabPane tab="Register" key="1">
        <TabsComponents  header='User Settings' form={<CreateUser />} item='item' formWidth='12' itemWidth='12' />
      </TabPane>
      <TabPane tab="Login" key="2">Content of Tab 2</TabPane>
      <TabPane tab="Forgot Password" key="3">Content of Tab 3</TabPane>
    </Tabs>
    );
  };
  
  export default UserPanelTab;