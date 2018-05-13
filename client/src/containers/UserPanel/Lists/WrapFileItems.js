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
       list:  {
          header: "List of My Files",
          icon: "edit",
          nav: "My Files",
          item: <ItemFiles />,
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

  handleTabChange = (key) => {
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
              onChange={this.handleTabChange}
            >
                <TabPane tab={this.state.list.nav} key={this.state.list.key}>
                <h4>School</h4>
                <Row gutter={6}>
                  <Col className="gutter-row"  xs={24} sm={24} md={14} lg={12} xl={12}>
                    <Row gutter={6}>
                      <Col className="gutter-row" span={24}>
                      {this.state.list.item}
                      </Col>
                      <Col className="gutter-row" span={24}>
                      {this.state.list.item}
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row gutter={6}>
                      <Col className="gutter-row" span={24} xs={24} sm={24} md={14} lg={12} xl={12}>
                      {this.state.list.item}
                      </Col>
                      <Col className="gutter-row" span={24} xs={24} sm={24} md={14} lg={12} xl={12}>
                      {this.state.list.item}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <h4>Personal</h4>
                <Row gutter={6} xs={24} sm={24} md={14} lg={12} xl={12}>
                  <Col className="gutter-row" span={12}>
                    <Row gutter={6}>
                      <Col className="gutter-row" span={24} xs={24} sm={24} md={14} lg={12} xl={12}>
                      {this.state.list.item}
                      </Col>
                      <Col className="gutter-row" span={24} xs={24} sm={24} md={14} lg={12} xl={12}>
                      {this.state.list.item}
                      </Col>
                    </Row>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Row gutter={6}>
                      <Col className="gutter-row" span={24} xs={24} sm={24} md={14} lg={12} xl={12}>
                      {this.state.list.item}
                      </Col>

                    </Row>
                  </Col>
                </Row>


                </TabPane>
                <TabPane tab={this.state.addDependent.nav} key={this.state.addDependent.key}>{this.state.addDependent.item}</TabPane>
            </Tabs>

    );
  }
  }
