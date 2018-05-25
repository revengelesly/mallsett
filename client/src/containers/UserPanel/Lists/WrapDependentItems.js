import React, { Component } from 'react';
import { Tabs, Col, Row } from 'antd';
import ItemDependent from './ItemDependent';
import Locations from '../Forms/Location';
import Files from '../Forms/FileManagement';
import axios from 'axios';
const { TabPane } = Tabs;

export default class FileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
      dependents: this.props.dependents || []
    };
  }

  componentWillReceiveProps = nextProps => {
    if (
      this.state.activeKey !== nextProps.activeKey &&
      nextProps.activeKey < 5
    ) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }

    this.setState({
      dependents: nextProps.dependents
    });
  };

  handleTabChange = key => {
    this.setState({
      activeKey: key
    });
  };

  componentWillReceiveProps = nextProps => {
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

    let myParents = {
      header: 'Request a Parent',
      icon: 'link',
      nav: 'My Parents',
      item: <ItemDependent />,
      formWidth: '12',
      itemWidth: '12',
      key: 2
    };

    let addLocations = {
      header: 'Add a new location',
      icon: 'link',
      nav: 'Add Locations',
      item: (
        <Locations
          handleAddLocation={this.props.handleAddLocation}
          editingLocation={this.props.editingLocation}
          handleRemoveLocation={this.props.handleRemoveLocation}
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
          editingFile={this.props.editingFile}
          handleRemoveFile={this.props.handleRemoveFile}
        />
      ),
      formWidth: '12',
      itemWidth: '12',
      key: 4
    };

    return (
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
                {items.map(item => (
                  <Col key={item._id} className="gutter-row" span={12}>
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
    );
  }
}
