import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Input,
  Select,
  Popover,
  Icon
} from 'antd';


const { Option, OptGroup } = Select;

const indentSelectAfter = (
  <Select defaultValue="minutes" style={{ width: 80 }}>
    <Option value="minutes">Begining</Option>
    <Option value="hours">End</Option>
  </Select>
);


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <Col span="24">
         
          { /******************************** 
         
              Information Section
              
          ******************************8*/ }
         
         { /* start   terms and conditions */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Terms and Conditions </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sales">
              <Option value="1">Celie Delivery</Option>
              <Option value="2">Uber</Option>
            </OptGroup>
            <OptGroup label="Special Customers">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
         { /* end    terms  */ }
         { /* start   for privacy policy... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Privacy Policy </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     for privacy policy  */ }
         { /* start   indent - name */ }
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Indent - Name  </Popover>
          <Input addonAfter={indentSelectAfter} style={{ width: '100%', marginBottom: 15, marginTop: 5 }} defaultValue="" />
          
         { /* end     indent - name  */ }
         { /* start   indent - description */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Indent - Description  </Popover>
          <Input addonAfter={indentSelectAfter} style={{ width: '100%', marginBottom: 15, marginTop: 5 }} defaultValue="" />
          
         { /* end     indent - description  */ } 
         

        </Col>
      </Row>
    );
  }
}
