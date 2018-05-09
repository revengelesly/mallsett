import React, { Component } from 'react';
import { Tabs, Col, Row } from 'antd';
import ItemFiles from './ItemFiles';
import Dependents from '../Forms/Dependents';

const { TabPane } = Tabs;

export default class FileItem extends Component {
    constructor(props) {
      super(props);
      this.state = { 
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

  render(props){
    return (


            <Tabs
              defaultActiveKey="1"
              tabPosition="top"
              size="small"
            >
                <TabPane tab={this.state.list.nav} key={this.state.list.key}>
                <h4>School</h4>
                <Row gutter={6}>
                  <Col className="gutter-row" span={12}>
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
                      <Col className="gutter-row" span={24}>
                      {this.state.list.item}
                      </Col>
                      <Col className="gutter-row" span={24}>
                      {this.state.list.item}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <h4>Personal</h4>
                <Row gutter={6}>
                  <Col className="gutter-row" span={12}>
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
                      <Col className="gutter-row" span={24}>
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
