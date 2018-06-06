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
  DatePicker ,
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
                {<IntlMessages id="form.part.date.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.date.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.date.name" />  </Popover>
          <Input style={{ width: '100%', marginTop: 5 }} />
          
          </Col>
         {/* end name */}
         
         {/* start date */}
         <Col xl={24} sm={24} md={12} lg={12} xl={12} style={{marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.date.start.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.date.start.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.date.start" />  </Popover>
            <DatePicker   style={{ width: '100%'}} />
          
          </Col>
         {/* start date */}
         {/* end date */}
         <Col xl={24} sm={24} md={12} lg={12} xl={12} style={{marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.date.end.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.date.end.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.date.end" />  </Popover>
            <DatePicker  style={{ width: '100%'}}  />
          
          </Col>
         {/* end date */}
{ /* start   category */ }
<Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
<Popover content={ 
     <IntlMessages id="form.part.date.category.popover.content" />
   } title={<IntlMessages id="form.part.date.category.popover.title" />} trigger="click">
   <Icon type="question-circle-o" /> <IntlMessages id="form.part.date.category" />  </Popover>
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
{ /* end     category */ }
         {/* start button */}
         <Col xl={24} sm={24} md={24} lg={24} xl={24} style={{marginBottom: 15, marginTop: 5 }} >
         <Button type="primary"  
         style={{ width: '100%', 
         marginBottom: 15, marginTop: 15, 
         borderRadius: 0 }}><IntlMessages id="form.part.date.submit" /></Button>
          
          </Col>
         {/* end button */}
         
       
      </Row>
    );
  }
}
