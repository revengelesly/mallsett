import React, { Component } from 'react';
import { Tabs } from 'antd';
import ItemLocation from './ItemLocation';
import Dependents from '../Forms/Dependents';

const { TabPane } = Tabs;

export default class FileItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeKey: '1',
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

  handTabChange = (key) => {
    this.setState({
      activeKey: key
    });
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.state.activeKey !== nextProps.activeKey && nextProps.activeKey < 3) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }
  }

  render(props){
    return (


            <Tabs
              defaultActiveKey="1"
              tabPosition="top"
              size="small"
              activeKey={this.state.activeKey}
              onChange={this.handTabChange}
            >
                <TabPane tab={this.state.list.nav} key={this.state.list.key}>{this.state.list.item}{this.state.list.item}</TabPane>
                <TabPane tab={this.state.addDependent.nav} key={this.state.addDependent.key}>{this.state.addDependent.item}</TabPane>
            </Tabs>

    );
  }
  }
