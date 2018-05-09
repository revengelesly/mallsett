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
       list:  {
          header: "List of My Dependents",
          icon: "edit",
          nav: "My Dependents",
          item: <ItemDependent />,
          formWidth: "12",
          itemWidth: '12',
          key: 1
        }      ,
        myParents:  {
          header: "Request a Parent",
          icon: "link",
          nav: "My Parents",
          item: <ItemDependent />,
          formWidth: "12",
          itemWidth: '12',
          key: 2
        },  
        
       addLocations:  {
          header: "Add a new location",
          icon: "link",
          nav: "Add Locations",
          item: <Locations />,
          formWidth: "12",
          itemWidth: '12',
          key: 3
        },  
        
       addFiles:  {
          header: "Add a new file",
          icon: "link",
          nav: "Add Files",
          item: <Files />,
          formWidth: "12",
          itemWidth: '12',
          key: 4
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
                
                <h4>Family</h4>
                <Row gutter={6} xs={2} sm={4} md={6} lg={8} xl={10}>
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
                <h4>Pet</h4>
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
              
                <TabPane tab={this.state.addLocations.nav} key={this.state.addLocations.key}>{this.state.addLocations.item}</TabPane>
                <TabPane tab={this.state.addFiles.nav} key={this.state.addFiles.key}>{this.state.addFiles.item}</TabPane>
                
            </Tabs>

    );
  }
  }
