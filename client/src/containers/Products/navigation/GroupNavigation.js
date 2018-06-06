import React, { Component } from 'react';
import LayoutContentWrapper from '../../../components//utility/layoutWrapper';
import LayoutContent from '../../../components//utility/layoutContent';
import GroupList from '../lists/GroupList';
import { 
  Row, 
  Col, 
  Tabs, 
} from 'antd';


const TabPane = Tabs.TabPane;


const steps = [
  {
  title: 'Group List',
  noIcon: 'plus-square-o',
  content: <GroupList />,
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: 'Add Image',
  noIcon: 'layout',
  content: 'form goes here',
  description: '',
  help: 'Groceries',
  key: '2'
}, {
  title: 'Add Sizes',
  noIcon: 'environment-o',
  content: '',
  description: '',
  help: 'Groceries',
  key: '11'
}, {
  title: 'Add Variations',
  noIcon: 'calendar',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: 'Add Wholesale',
  noIcon: 'book',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '5'
}, {
  title: 'Add Lifespan',
  noIcon: 'environment-o',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '9'
}, {
  title: 'Add Age Range',
  noIcon: 'team',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '6'
},  {
  title: 'Add Class Range',
  noIcon: 'car',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '7'
}, {
  title: 'Add Date & Time Range',
  noIcon: 'calendar',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: 'Add Add on Options',
  noIcon: 'clock-circle-o',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '10'
}, {
  title: 'Add Other Fees',
  noIcon: 'global',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '12'
}
];


class BuildYourMall extends Component {
  render() {
    return (

            <Row gutter={24} style={{ marginTop: '0px'}}>
              <Col span="24">
                <Tabs defaultActiveKey='1' size='small' tabPosition='right'>
                  {steps.map(item =><TabPane key={item.key} tab={<span>{item.title}</span>} >
                  {item.content}
                  </TabPane> )}
                </Tabs>
              </Col>
             </Row>   

    );
  }
}

export default BuildYourMall;