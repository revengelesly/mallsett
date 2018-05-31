import React, { Component } from 'react';
import { Tabs, Col, Row } from 'antd';
import ItemDependent from './ItemDependent';
import Locations from '../Forms/Location';
import Files from '../Forms/FileManagement';

const { TabPane } = Tabs;

export default class FileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
      dependents: this.props.dependents || []
    };
  }

  handleTabChange = key => {
    this.setState({
      activeKey: key
    });

    this.props.handleItemActiveTab(key);
  };

  componentWillReceiveProps = nextProps => {
    if (this.state.activeKey !== nextProps.activeKey && nextProps.activeKey < 5) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }

    this.setState({
      dependents: nextProps.dependents
    });
  };

  render(props) {
    let items = this.state.dependents.map(x =>
      <ItemDependent
          key={x._id}
          {...x}
          handleRemoveDependent={this.props.handleRemoveDependent}
          handleEditDependent={this.props.handleEditDependent}
        />
    );

    let list = {
      header: 'List of My Dependents',
      icon: 'edit',
      nav: 'My Dependents',
      formWidth: '12',
      itemWidth: '12',
      key: 1
    };

    let addLocations = {
      header: 'Add a new location',
      icon: 'link',
      nav: 'Add Locations',
      item: (
        <Locations
          handleAddLocation={this.props.handleAddLocation}
          dependents={this.props.dependents}
          {...this.props}
        />
      ),
      formWidth: '12',
      itemWidth: '12',
      key: 3
    };

    let addFiles = {
      header: 'Add a new file',
      icon: 'link',
      nav: 'Add Files',
      item: (
        <Files
          handleAddFile={this.props.handleAddFile}
          dependents={this.props.dependents}
          {...this.props}
        />
      ),
      formWidth: '12',
      itemWidth: '12',
      key: 4
    };

    return (
      <div id={this.props.id || 'dependentId'}>
      <Tabs
        defaultActiveKey="1"
        tabPosition="top"
        size="small"
        activeKey={this.state.activeKey}
        onChange={this.handleTabChange}
      >
        <TabPane tab={list.nav} key={list.key}>
          {items &&
            items.length > 0 && (
              <Row gutter={6} xs={2} sm={4} md={6} lg={8} xl={10}>
                {items.map((item, index) => (
                  <Col className="gutter-row" span={12} key={index}>
                    {item}
                  </Col>
                ))}
              </Row>
            )}
        </TabPane>

        <TabPane tab={addLocations.nav} key={addLocations.key}>
          {addLocations.item}
        </TabPane>
        <TabPane tab={addFiles.nav} key={addFiles.key}>
          {addFiles.item}
        </TabPane>
      </Tabs>
      </div>
    );
  }
}
