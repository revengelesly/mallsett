import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import GroupWrapper from './list.style';
import GroupItemBasic from './GroupItemBasic';
import { 
  Row, 
  Button,
  Collapse,
  Popover,
  Icon,
  Col
} from 'antd';

const Panel = Collapse.Panel;


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <h4  style={{marginBottom: 15}}>Product Group List </h4>
        <Col span="23" style={{marginBottom: 15}}  >
          <GroupItemBasic />
        </Col>
        <Col span="23" style={{marginBottom: 15}}  >
          <div className="groupAdvanceDetail" >
             <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header={<IntlMessages id="form.part.group.header.1.title" />}  key="1" >
                  <Popover content={ 
                      <div>
                        {<IntlMessages id="form.part.group.header.1.popover.content"/>} 
                      </div>
                    } title={<IntlMessages id="form.part.group.header.1.popover.title" />}  trigger="click">
                    <p style={{marginBottom: 15}}><Icon type="question-circle-o" /> <IntlMessages id= "form.part.group.header.1.message" /></p>
                   </Popover>
                </Panel>
              </Collapse>
          </div>
        </Col>
      </Row>
    );
  }
}

