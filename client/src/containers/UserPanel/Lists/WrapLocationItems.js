import React, { Component } from 'react';
import { Tabs } from 'antd';
import ItemLocation from './ItemLocation';
import Dependents from '../Forms/Dependents';

const { TabPane } = Tabs;

export default class FileItem extends Component {
    constructor(props) {
      super(props);
      this.state = { 
       list:  {
          header: "List of My Locations",
          icon: "edit",
          nav: "My Locations",
          item: <ItemLocation />,
          formWidth: "12",
          itemWidth: '12',
          key: 1
        }      ,  
        
       addDependent:  {
          header: "Add a new dependent",
          icon: "link",
          nav: "Add New Dependent",
          item: <Dependents />,
          formWidth: "12",
          itemWidth: '12',
          key: 2
        }      
      };
    }

  render(props){
    return (


            <Tabs
              defaultActiveKey="1"
              tabPosition="top"
              size="small"
            >
                <TabPane tab={this.state.list.nav} key={this.state.list.key}>{this.state.list.item}{this.state.list.item}</TabPane>
                <TabPane tab={this.state.addDependent.nav} key={this.state.addDependent.key}>{this.state.addDependent.item}</TabPane>
            </Tabs>

    );
  }
  }
