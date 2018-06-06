import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import Progress from '../../../components/uielements/progress';
import PageHeader from '../../../components/utility/pageHeader';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../components/utility/box';
import basicStyle from '../../../config/basicStyle';
import IntlMessages from '../../../components/utility/intlMessages';
import { Icon } from 'antd';
import { rtl } from '../../../config/withDirection';


export default class UserGamification extends Component {
  state = {
    percent: 0,
  };
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const marginStyle = {
      margin: rtl === 'rtl' ? '0 0 10px 10px' : '0 10px 10px 0',
    };
    return (
        <Row  justify="center">
          <Col md={24} xs={24} style={colStyle}>
              <Row justify='center'  >
                <Col md={8} justify='left' className="dashed  pointer medPaddingAll textCenter noBorderBottom" >
                Deposite Required <Icon type="check-circle" className="green" />
                 
                </Col>
                <Col md={8}  className="dashed medPaddingAll pointer  textCenter noBorderBottom" >
                 No Deposite Required <Icon type="check-circle"  className="green" />
                </Col>
                <Col md={4}  className="dashed medPaddingAll pointer textCenter noBorderBottom" >
                  Full Access <Icon type="check-circle-o" className="green"  />
                  
                </Col>
                <Col md={4}  className="dashed medPaddingAll pointer  textCenter noBorderBottom" >
                 $$$ LOC <Icon type="check-circle-o" className="green"  />
                </Col>
              </Row>
            
              <Progress percent={50} strokeWidth={10} status={'active'} showInfo={false} style={marginStyle} />

          </Col>
          
        </Row>
    );
  }
}
