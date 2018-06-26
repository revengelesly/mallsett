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
          
         { /* start     add on options   */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Variations  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
        { /* end     add on options   */ }
         { /* start   size */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Sizes  </Popover> <a href="#">add new</a>
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
         { /* end   size */ }
         
         
        
         
          
         </Col>

    );
  }
}
