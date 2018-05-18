import React, { Component } from 'react';
import { 
  Row, 
  Col,
  Input,
  Button,
  Select,
  Tabs,
  Switch,
  Popover,
  Icon
} from 'antd';

const TabPane = Tabs.TabPane;

const { Option, OptGroup } = Select;
const TextArea = Input;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


const selectAfter = (
  <Select defaultValue="minutes" style={{ width: 80 }}>
    <Option value="minutes">Minutes</Option>
    <Option value="hours">Hours</Option>
    <Option value="days">Days</Option>
    <Option value="weeks">Weeks</Option>
    <Option value="months">Months</Option>
    <Option value="years">Years</Option>
  </Select>
);

export default class  extends Component {
  state = {
    disabled: true,
  };
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
  render() {
     const { disabled } = this.state;
    return (
      <Row gutter={24}>
        <Col span="24">
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Name
           </Popover>
          <Input placeholder="Section name"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Description  </Popover>
         
          <TextArea placeholder="short description" autosize={{ minRows: 2, maxRows: 6 }}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Discount  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sales">
              <Option value="1">Hermain Miller Sales 25% 28 DSE</Option>
              <Option value="2">Summer Sales 25$ 40 DSE</Option>
            </OptGroup>
            <OptGroup label="Special Customers">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Date and Time Range  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Morning">
              <Option value="1">Sun Morning Jan 8 - Jan 30 from 11am-12pm</Option>
              <Option value="2">Summer Sales 25$ 40 DSE</Option>
            </OptGroup>
            <OptGroup label="Days">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Ready in ...  </Popover>
          <Input addonAfter={selectAfter} style={{ width: '100%', marginBottom: 15, marginTop: 5 }} defaultValue="15" />
        <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Specific Customers  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Customer by Group">
              <Option value="21">Top 10% Spender</Option>
              <Option value="21">Top 25% Spender</Option>
              <Option value="21">Top 50% Spender</Option>
              <Option value="21">Low 10% Spender</Option>
              <Option value="21">Low 25% Spender</Option>
              <Option value="21">Low 50% Spender</Option>
              <Option value="3">Loyal Customers</Option>
              <Option value="4">Impulsive Customers</Option>
              <Option value="5">Potential Customers</Option>
              <Option value="6">New Customers</Option>
              <Option value="7">Discount Customers</Option>
            </OptGroup>
            <OptGroup label="Customer by Individuals">
              <Option value="11">James Brown</Option>
              <Option value="12">Stevie Wonder</Option>
              <Option value="13">Maxwell</Option>
              <Option value="14">Wyclef</Option>
            </OptGroup>
          </Select>
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Published:  </Popover> <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} style={{ marginBottom: 15, marginTop: 5, marginTop: 15  }}  />

              <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }}>Submit</Button>

        </Col>
      </Row>
    );
  }
}
