import React, { Component } from 'react';
import { Tabs, Col, Row } from 'antd';
import Privacy from '../Info/Privacy';
import AboutUs from '../Info/AboutUs';
import Terms from '../Info/Terms';
const { TabPane } = Tabs;

export default class FileItem extends Component {
    constructor(props) {
      super(props);
      this.state = { 
       list:  {
          header: "About us",
          icon: "edit",
          nav: "About us",
          item: <AboutUs />,
          formWidth: "12",
          itemWidth: '12',
          key: 1
        }      ,  
        
       addLocations:  {
          header: "Terms and Conditions",
          icon: "link",
          nav: "Terms",
          item: <Terms />,
          formWidth: "12",
          itemWidth: '12',
          key: 2
        },  
        
       addFiles:  {
          header: "Add a new file",
          icon: "link",
          nav: "Privacy Policy",
          item: <Privacy />,
          formWidth: "12",
          itemWidth: '12',
          key: 3
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
