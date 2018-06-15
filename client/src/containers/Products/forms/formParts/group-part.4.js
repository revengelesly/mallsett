import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Col, 
  Select,
  Input,
  Popover,
  Icon,
} from 'antd';

const { Option, OptGroup } = Select;



export default class  extends Component {

 
  render() {
    return (
      <Col span="24">
         
         { /******************************** 
         
              Ending Section
              
          *******************************/ }
          
         { /* start   discounts */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Discount  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sales">
              <Option value="1">Hermain Miller Sales 25% 28 DSE</Option>
              <Option value="2">Summer Sales 25$ 40 DSE</Option>
            </OptGroup>
            <OptGroup label="Special Customers">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
         { /* end   discounts */ }
         
         
         { /* start   wholesale */ }

            <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Wholesale Discounts  </Popover><a href="#">add new</a>
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
            
         { /* end     wholesale */ }
         
          { /* start   other fees */ }
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Other Fees  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Category">
              <Option value="21">Fee 1</Option>
              <Option value="21">Fee 2</Option>
              
            </OptGroup>
          </Select>
          
          { /* end     other fees */ }
         
          
         </Col>

    );
  }
}
