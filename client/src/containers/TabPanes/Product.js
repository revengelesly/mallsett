import React, { Component } from 'react';
import IntlMessages from '../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Popover,
  Icon
} from 'antd';

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

              {this.props.content[1]}
        </Col>
      </Row>
    );
  }
}
