import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }
  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs
          defaultActiveKey="2"
          tabPosition='right'
          size='small'
        >
          <TabPane tab="Product List" key="1">something</TabPane>
          <TabPane tab="Add Sections" key="2">something</TabPane>
          <TabPane tab="Add Sizes" key="3">something</TabPane>
          <TabPane tab="Add Variations" key="4">something</TabPane>
          <TabPane tab="Add Wholesale" key="5">something</TabPane>
          <TabPane tab="Add Lifespan" key="6">something</TabPane>
          <TabPane tab="Add Age Range" key="7">something</TabPane>
          <TabPane tab="Add Class Range" key="8">something</TabPane>
          <TabPane tab="Add Date Range" key="9">something</TabPane>
          <TabPane tab="Add Time Range" key="10">something</TabPane>
          <TabPane tab="Add Other Fees" key="11">something</TabPane>
          <TabPane tab="Add Discounts" key="12">something</TabPane>
          <TabPane tab="Add Offers" key="13">something</TabPane>
          <TabPane tab="Add Staffs" key="14">something</TabPane>
        </Tabs>
      </div>
    );
  }
}