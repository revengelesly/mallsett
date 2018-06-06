import React, { Component } from 'react';
import GroupPart1 from './formParts/group-part.1';
import GroupPart2 from './formParts/group-part.2';
import GroupPart3 from './formParts/group-part.3';
import GroupPart4 from './formParts/group-part.4';
import GroupPart5 from './formParts/group-part.5';
import FormWrapper from './form.style';
import IntlMessages from '../../../components/utility/intlMessages';
import { 
  Row, 
  Button,
  Collapse,
  Popover,
  Icon
} from 'antd';

const Panel = Collapse.Panel;


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<IntlMessages id="form.part.group.header.1.title" />}  key="1" style={FormWrapper.collapsed}>
          <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.header.1.popover.content"/>} 
              </div>
            } title={<IntlMessages id="form.part.group.header.1.popover.title" />}  trigger="click">
            <p style={{marginBottom: 15}}><Icon type="question-circle-o" /> <IntlMessages id= "form.part.group.header.1.message" /></p>
           </Popover>
          
          <GroupPart1 />
          <GroupPart5 />
          
        </Panel>
        <Panel header={<IntlMessages id="form.part.group.header.2.title" />}  key="2" style={FormWrapper.collapsed}>
          
          <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.header.2.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.group.header.2.popover.title" />}  trigger="click">
            <p style={{marginBottom: 15}}><Icon type="question-circle-o" /> <IntlMessages id= "form.part.group.header.2.message" /></p>
           </Popover>
          <GroupPart2 />
        </Panel>
        <Panel header={<IntlMessages id="form.part.group.header.3.title" />}  key="3" style={FormWrapper.collapsed}>
          
          <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.header.3.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.group.header.3.popover.title" />}  trigger="click">
            <p style={{marginBottom: 15}}><Icon type="question-circle-o" /> <IntlMessages id= "form.part.group.header.3.message" /></p>
           </Popover>
          <GroupPart2 />
          <GroupPart3 />
          <GroupPart4 />
          
        </Panel>
      </Collapse>
       <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}>Submit</Button>
      </Row>
    );
  }
}
