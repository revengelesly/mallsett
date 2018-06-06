import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Switch,
  Popover,
  Icon,
} from 'antd';


export default class  extends Component {
  state = {
    navigateSection: true,
    publishSection: true,
    overiderSection: false
  };
  handlePublishedChange = (publishSection) => {
    this.setState({ publishSection });
  }
  handleNaviagionChange = (navigateSection) => {
    this.setState({ navigateSection });
  }
  handleOverideriderChange = (overiderSection) => {
    this.setState({ overiderSection });
  }
  render() {
     const { navigateSection, publishSection, overiderSection } = this.state;
    return (
      <Row gutter={24}>
         
         { /******************************** 
         
              Ending Section
              
          ******************************8*/ }
         { /* start   overide products */ }
         <Col span="24"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }}>
            <Switch size="small" 
              checked={overiderSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleOverideriderChange} 
              style={{ marginBottom: 15, marginTop: 15  }}
            /> <Popover content={ 
            
                 <IntlMessages id="form.part.group.overide.popover.content" />
            
            } title= {<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.overide.popover.title" />
              </div> }  trigger="click">
              <IntlMessages id="form.part.group.overide" />  :  <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     overide products  */ }
         { /* start   navigate sections */ }
         <Col span="24"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }}>
            <Switch size="small" 
              checked={navigateSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleNaviagionChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.group.navigate.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.navigate.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="form.part.group.navigate" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     navigate sections  */ }
         { /* start   publish sections */ }

            <Col span="24"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }}>
            <Switch size="small" 
              checked={publishSection}
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handlePublishedChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.group.published.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.published.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="form.part.group.published" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
            
         { /* end     publish sections */ }
         </Row>

    );
  }
}
