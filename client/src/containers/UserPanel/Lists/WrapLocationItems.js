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
      locations: props.locations || []
    };
  }

  handTabChange = key => {
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
      locations: nextProps.locations
    });
  };

  render(props) {
    let items = this.state.locations.map(x => {
      let owner = this.props.dependents
        ? this.props.dependents.find(dependent => dependent._id === x.owner)
        : null;
      return (
        <ItemLocation
          key={x._id}
          handleEditButton={this.props.handleEditButton}
          handleRemoveButton={this.props.handleRemoveButton}
          ownerPhone={owner && owner.phone}
          ownerName={owner && owner.displayName}
          {...x}
        />
      );
    });

    let list = {
      header: 'List of My Locations',
      icon: 'edit',
      nav: 'My Locations',
      formWidth: '12',
      itemWidth: '12',
      key: 1
    };

    let addDependent = {
      header: 'Add a new dependent',
      icon: 'link',
      nav: 'Add New Dependent',
      item: <Dependents
              uploadId='wrapLocationItemUpload'
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
        onChange={this.handTabChange}
      >
        <TabPane tab={list.nav} key={list.key}>
          {items && items.length > 0 && items.map(x => x)}
        </TabPane>

        <TabPane tab={addDependent.nav} key={addDependent.key}>
          {addDependent.item}
        </TabPane>
      </Tabs>
    );
  }
}
