import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import moment from 'moment';
import { 
  Row, 
  Col,
  Select,
  Input,
  Popover,
  Icon,
  Button,
  TimePicker ,
  message
} from 'antd';

const { Option, OptGroup } = Select;

export default class  extends Component {
  render() {
    return (
      <Row gutter={24}>
         {/* start name */}
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.time.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.time.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.time.name" />  </Popover>
          <Input style={{ width: '100%', marginTop: 5 }} />
          
          </Col>
         {/* end name */}
         
         {/* start time */}
         <Col xl={24} sm={24} md={12} lg={12} xl={12} style={{marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.time.start.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.time.start.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.time.start" />  </Popover>
            <TimePicker   style={{ width: '100%'}} />
          
          </Col>
         {/* start time */}
         {/* end time */}
         <Col xl={24} sm={24} md={12} lg={12} xl={12} style={{marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.time.end.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.time.end.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.time.end" />  </Popover>
            <TimePicker  style={{ width: '100%'}}  />
          
          </Col>
         {/* end time */}

        
         { /* start    category */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.time.category.popover.content" />
            } title={<IntlMessages id="form.part.time.category.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.time.category" />  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Business">
              <Option value="1">Products</Option>
              <Option value="2">Sections</Option>
            </OptGroup>
            <OptGroup label="Personal">
              <Option value="3">This</Option>
              <Option value="4">that</Option>
            </OptGroup>
            
          </Select>
          </Col>
         { /* end      category */ }
          {/* start button */}
          <Col xl={24} sm={24} md={24} lg={24} xl={24} style={{marginBottom: 15, marginTop: 5 }} >
         <Button type="primary"  
         style={{ width: '100%', 
         marginBottom: 15, marginTop: 15, 
         borderRadius: 0 }}><IntlMessages id="form.part.time.submit" /></Button>
          
          </Col>
         {/* end button */}
       
      </Row>
    );
  }
}
