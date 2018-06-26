import React, { Component } from 'react';
import IntlMessages from '../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Popover,
  Icon,
  Collapse

} from 'antd';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};


export default class  extends Component {
  render(props) {
    return (

        <Row gutter={24}>
        <Col className="" span={this.props.span[0]}>
       
        <Popover content={ 
              <div>
                {<IntlMessages id={this.props.popoverTitle[0]} />} 
              </div>
            } title={<IntlMessages id={this.props.popoverContent[0]} />}   
            trigger="click"> 
             <h4  style={{marginBottom: 15}}> 
             <Icon type="question-circle-o" />  <IntlMessages id={this.props.pageTitle[0]} /> 
             </h4>
             </Popover>

          {this.props.content[0]}
        </Col>
        <Col className="" span={this.props.span[1]}>
        <Popover content={ 
              <div>
                {<IntlMessages id={this.props.popoverTitle[1]} />} 
              </div>
            } title={<IntlMessages id={this.props.popoverContent[1]} />}   
            trigger="click"> 
             <h4  style={{marginBottom: 15}}> 
             <Icon type="question-circle-o" />  <IntlMessages id={this.props.pageTitle[1]} /> 
             </h4>
             </Popover>
             <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
    {this.props.content[1]}
    </Panel>
    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
    {this.props.content[1]}
    </Panel>
    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
    {this.props.content[1]}
    </Panel>
  </Collapse>
        </Col>
      </Row>
    );
  }
}
