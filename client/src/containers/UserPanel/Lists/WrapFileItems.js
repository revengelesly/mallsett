import React, { Component } from 'react';
import { Tabs, Col, Row } from 'antd';
import ItemFiles from './ItemFiles';
import Dependents from '../Forms/Dependents';

const { TabPane } = Tabs;

export default class FileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
      files: props.files || []
    };
  }

  handleTabChange = key => {
    this.setState({
      activeKey: key
    });
  };

  componentWillReceiveProps = nextProps => {
    if (
      this.state.activeKey !== nextProps.activeKey &&
      nextProps.activeKey < 3
    ) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }

    this.setState({
      files: nextProps.files
    });
  };

  render(props) {
    let items = this.state.files.map(
      x =>
        x && (
          <ItemFiles
            key={x._id}
            handleEditButton={this.props.handleEditButton}
            handleRemoveButton={this.props.handleRemoveButton}
            {...x}
          />
        )
    );

    let list = {
      header: 'List of My Files',
      icon: 'edit',
      nav: 'My Files',
      formWidth: '12',
      itemWidth: '12',
      key: 1
    };

    let addDependent = {
      header: 'Add a new dependent',
      icon: 'link',
      nav: 'Add New Dependent',
      item: <Dependents
              uploadId='wrapFileItemUpload'
            />,
      formWidth: '12',
      itemWidth: '12',
      key: 2
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
          <Row gutter={6}>
            {items &&
              items.length > 0 &&
              items.map(x => (
                <Col
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={14}
                  lg={12}
                  xl={12}
                >
                  {x}
                </Col>
              ))};
          </Row>
        </TabPane>

        <TabPane tab={addDependent.nav} key={addDependent.key}>
          {addDependent.item}
        </TabPane>
      </Tabs>
    );
  }
}
