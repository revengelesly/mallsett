import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Select,
  Popover,
  Icon,
} from 'antd';

const { Option, OptGroup } = Select;

export default class  extends Component {
  render() {
    return (
      <Row gutter={24}>
        <Col span="24">
        
         
        
          
         
         
         
         { /* start   age range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Age Range  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Adults">
              <Option value="1">Adult 18 and older</Option>
              <Option value="2">Drink Age 21 and older </Option>
            </OptGroup>
            <OptGroup label="Kids">
              <Option value="3">Infants 0 - 12 months</Option>
              <Option value="4">Babies 13 to 28 months</Option>
            </OptGroup>
          </Select>
          
         { /* end     age range */ }
         { /* start   class range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Class Range </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Small Classes">
              <Option value="1">1</Option>
              <Option value="2">4 - 6</Option>
            </OptGroup>
            <OptGroup label="Big Classes">
              <Option value="3">7 - 12</Option>
              <Option value="4">13 - 15</Option>
            </OptGroup>
          </Select>
         { /* end     class range */ }
         
         
       

             
        </Col>
      </Row>
    );
  }
}
