import React, { Component } from 'react';
import IntlMessages from '../../../../../components/utility/intlMessages';
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
         
              Specification Section
              
          ******************************8*/ }
         { /* start   for products... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Store Locations </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     for products  */ }
         { /* start   for products... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Add to the following Products  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     for products  */ }
         { /* start   customers */ }
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Specific Customers  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Customer by Group">
              <Option value="21">Top 10% Spender</Option>
              <Option value="21">Top 25% Spender</Option>
              <Option value="21">Top 50% Spender</Option>
              <Option value="21">Low 10% Spender</Option>
              <Option value="21">Low 25% Spender</Option>
              <Option value="21">Low 50% Spender</Option>
              <Option value="3">Loyal Customers</Option>
              <Option value="4">Impulsive Customers</Option>
              <Option value="5">Potential Customers</Option>
              <Option value="6">New Customers</Option>
              <Option value="7">Discount Customers</Option>
            </OptGroup>
            <OptGroup label="Customer by Individuals">
              <Option value="11">James Brown</Option>
              <Option value="12">Stevie Wonder</Option>
              <Option value="13">Maxwell</Option>
              <Option value="14">Wyclef</Option>
            </OptGroup>
          </Select>
             
         { /* end     customers  */ }.
         { /* start   marketing services */ }
          
           <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Exclusive Marketing Agency  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sales">
              <Option value="1">Mad Men</Option>
              <Option value="2">Mareting Centeral</Option>
            </OptGroup>
            <OptGroup label="Special Customers">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
             
         { /* end     marketing service  */ }
         { /* start   terms */ }
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
