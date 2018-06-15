import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Input,
  Select,
  Popover,
  Icon
} from 'antd';


const { Option, OptGroup } = Select;

const indentSelectAfter = (
  <Select defaultValue="minutes" style={{ width: 80 }}>
    <Option value="minutes">Begining</Option>
    <Option value="hours">End</Option>
  </Select>
);


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <Col span="24">
         
          { /******************************** 
         
              Specification Section
              
          ******************************8*/ }
         
        
         { /* start   prerequise... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Pre-requiset  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     prerequisits  */ }
         { /* start   co-prerequise... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> co-requisit  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     co-prerequisits  */ }
         { /* start   next... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Recomended Next  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     next  */ }
         
         
         

        </Col>
      </Row>
    );
  }
}
