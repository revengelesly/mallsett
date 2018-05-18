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
  DatePicker,
  Button
} from 'antd';

const { Option, OptGroup } = Select;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

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
                {<IntlMessages id="form.part.date.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.date.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.date.name" />  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          
         {/* end name */}
        { /* start   date range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.date.range" />  </Popover>
          <RangePicker
           style={{ width: '100%', marginBottom: 15, marginTop: 5 }} 
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
         />
         { /* end     date range */ }
         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}>Add Date</Button>
        </Col>
      </Row>
    );
  }
}
