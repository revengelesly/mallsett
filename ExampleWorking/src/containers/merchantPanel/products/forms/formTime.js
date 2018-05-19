import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import moment from 'moment';
import { 
  Row, 
  Col,
  Select,
  Input,
  Popover,
  Icon,
  TimePicker ,
  Button
} from 'antd';



export default class  extends Component {
  render() {
    return (
      <Row gutter={24}>
        <Col span="24">
        
         
        { /******************************** 
         
              Basic Sections
              
          ******************************8*/ }
         {/* start name */}
         
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.time.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.time.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.time.name" />  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          
         {/* end name */}
        { /* start   date range */ }
         <Popover content={ 
              <div>
                {<IntlMessages id="form.part.time.range.popover.title" />} 
              </div>
            } title={<IntlMessages id="form.part.time.range.popover.title" />}   trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.time.range" />  </Popover>
            <Row  gutter={24}>
            <Col span={12}>  <TimePicker minuteStep={15} secondStep={10}  style={{ width: '100%', marginBottom: 15, marginTop: 15, borderRadius: 0 }}/> </Col>
            <Col span={12}>  <TimePicker minuteStep={15} secondStep={10}  style={{ width: '100%', marginBottom: 15, marginTop: 15, borderRadius: 0 }}/> </Col>
            </Row>
         { /* end     date range */ }
         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 30, borderRadius: 0 }}>Submit</Button>
        </Col>
      </Row>
    );
  }
}
