import React, { Component } from 'react';
import { 
    Popover,
    Icon 
} from 'antd';

import IntlMessages from '../../../components/utility/intlMessages';

class FormTitle extends Component {
    render() {
      return (
          <Popover content={ 
              <div>
                  {<IntlMessages id={this.props.popoverContent} />} 
              </div>
              } title={<IntlMessages id={this.props.popoverTitle} />}  
              trigger="click">
              <Icon type="question-circle-o" 
              /> {<IntlMessages id={this.props.title} />}   
          </Popover>
      );
    }
  }





export default FormTitle;