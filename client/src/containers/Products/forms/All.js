import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Alert, Form, Icon, Input, Button, Select,
  Row, Col, Popover, DatePicker, TimePicker

} from 'antd';
import { addFile } from '../../../redux/documents/middlewares';
import UploadComponent from './uppy/UploadComponent';
import IntlMessages from '../../../components/utility/intlMessages';

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;



const InputGroup = Input.Group;
function onChangeStart(date, dateString) {
  console.log(date, dateString);
}
function onChangeEnd(date, dateString) {
  console.log(date, dateString);
}
// lifespan, options, fees
/* start for categories */
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleCategoryChange(value) {
  console.log(`selected ${value}`);
}

/* end for categories */
/* start for time */
function onTimeChangeStart(time, timeString) {
  console.log(time, timeString);
}
function onTimeChangeEnd(time, timeString) {
  console.log(time, timeString);
}
/* end for time */
/* start for date */
function onDateChangeStart(time, timeString) {
  console.log(time, timeString);
}
function onDateChangeEnd(time, timeString) {
  console.log(time, timeString);
}
/* end for date */
/* start for wholesale */
const indentSelectAfter = (
  <Select defaultValue="percent" style={{ width: 150 }}>
    <Option value="amount">Amount</Option>
    <Option value="percent">Percent</Option>
  </Select>
);
/* end for wholesale */

/* Warranty */

      const indentSelectAfterWarranty = (
        <Select defaultValue="days" style={{ width: 150 }}>
          <Option value="days">Days</Option>
          <Option value="hours">Hours</Option>
        </Select>
      );
/* Warranty */

/* start for lifespan */
const indentSelectAfterLifespan = (
  <Select defaultValue="days" style={{ width: 150 }}>
    <Option value="days">days</Option>
    <Option value="hours">hours</Option>
  </Select>
);

/* end for lifespan */

/* start for size */
const indentSelectAfterLength = (
  <Select defaultValue="days" style={{ width: 150 }}>
    <Option value="Millimeters">Millimeters</Option>
    <Option value="Centimeters">Centimeters</Option>
    <Option value="Miles">Miles</Option>
    <Option value="Inches">Inches</Option>
    <Option value="Meter">Meter</Option>
    <Option value="Kilometers">Kilometers</Option>
    <Option value="Feet">Feet</Option>
    <Option value="Yards">Yards</Option>


  </Select>
);


const indentSelectAfterWeight = (
  <Select defaultValue="days" style={{ width: 150 }}>
    <Option value="MetricTons	">Metric Tons	</Option>
    <Option value="Kilograms">Kilograms</Option>
    <Option value="Pounds">Pounds</Option>
    <Option value="Oz">Oz</Option>
    <Option value="Grams">Grams</Option>
    <Option value="Tons">Tons</Option>
    <Option value="Milliliters">Milliliters</Option>
    <Option value="Liters">Liters</Option>
    <Option value="FluidOunces">Fluid Ounces</Option>
    <Option value="Pints">Pints</Option>
    <Option value="Cups">Cups</Option>
    <Option value="Quarts">Quarts</Option>
    <Option value="Gallons">Gallons</Option>
  </Select>
);


/* end for size */

/* start for question */
const indentSelectAfterQuestion = (
  <Select defaultValue="percent" style={{ width: 150 }}>
    <Option value="amount">Comments</Option>
    <Option value="percent">Questions</Option>
  </Select>
);
/* end for question */




class FileManagementForm extends Component {
  state = {
    checkDob: false,
    ageInfo: '',
    formItemLayout: {},
    uploadURL: '',
    editingFile: null,
    showErrorMessage: false,
    owner: null,
    isUploadComponentReset: false
  };

  handleAgeChange = e => {
    this.setState(
      {
        checkDob: e.target.checked
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      }
    );
  };

  handleUploadFileSuccess = url => {
    this.setState({
      uploadURL: url
    });
  };

  handleCategoryChange = (value) => {

  }

  handleProfileChange = (value) => {
    this.setState({
      owner: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, newFile) => {
      if (!err) {
        let file = {
          displayName: newFile.name,
          notes: newFile.Notes,
          categories: newFile.category,
          directory: this.state.uploadURL ? this.state.uploadURL : (this.state.editingFile ? this.state.editingFile.directory : ''),
          profile: this.props.profile._id,
          owner: this.state.owner ? this.state.owner : (this.state.editingFile ? this.state.editingFile.owner : [])
        };

        if (this.state.editingFile) {
          console.log(this.state.editingFile);
          file.file_id = this.state.editingFile._id;
          console.log(file);
        }

        console.log('Received values of form: ', file);
        if (file.directory && file.owner) {
          this.props.form.resetFields();
          this.setState({
            isUploadComponentReset: !this.state.isUploadComponentReset,
            showErrorMessage: false
          });
          this.props.handleItemActiveTab('1');

          this.props.handleAddFile(file);
        } else {
          this.setState({
            showErrorMessage: true
          })
        }
      }
    });
  };

  

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = this.state.formItemLayout;

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem {...formItemLayout}>
            <UploadComponent
              id={this.props.uploadId || 'uploadFile'}
              handleUploadFileSuccess={this.handleUploadFileSuccess}
              isReset={this.state.isUploadComponentReset}
            />
          </FormItem>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.displayedName.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.displayedName.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.displayedName" />  
  </Popover>
  } {...formItemLayout}>
            {getFieldDecorator('displayName', {
              rules: [{ required: true, message: <IntlMessages id="form.displayedName.required" />}],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input
                autoComplete=""
                prefix={
                  <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeHolder="Display Name"
              />
            )}
          </FormItem>

          
          

          <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.startDate.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.startDate.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.startDate" />  
  </Popover>
          }>
    
          <Col >
            {getFieldDecorator('startDate', {
              rules: [{ required: false, message: <IntlMessages id="form.required" />   }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <DatePicker onChange={onDateChangeStart}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="start date"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.endDate.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.endDate.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.endDate" />  
  </Popover>
          }>
    
          <Col >
            {getFieldDecorator('endDate', {
              rules: [{ required: false, message: <IntlMessages id="form.required" />   }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <DatePicker onChange={onDateChangeStart}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="end date"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
  </Col>
  </Row>

  <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.startTime.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.startTime.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.startTime" />  
  </Popover>
          }>
    
          <Col >
            {getFieldDecorator('startTime', {
              rules: [{ required: false, message: <IntlMessages id="form.required" />   }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <TimePicker onChange={onTimeChangeStart}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="start time"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.endTime.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.endTime.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.endTime" />  
  </Popover>
          }>
    
          <Col >
            {getFieldDecorator('endTime', {
              rules: [{ required: false, message: <IntlMessages id="form.required" />   }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <DatePicker onChange={onTimeChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="end time"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
  </Col>
  </Row>

  <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.minimum.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.minimum.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.minimum" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('minimum', {
              rules: [{ required: false, message: <IntlMessages id="form.required" />  }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="min"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.maximum.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.maximum.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.maximum" />  
  </Popover>
  }>

  <Col >
    {getFieldDecorator('maximum', {
      rules: [{ required: false, message: <IntlMessages id="form.required" />  }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
        prefix={
          <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="max"
        style={{width: "100%"}}
      />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>
  <Row gutter={12}>
          <Col xs={24} sm={24} md={16} lg={18} xl={18}>
          
          
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.maximum.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.maximum.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.maximum" />  
  </Popover>
  }>

  <Col >
    {getFieldDecorator('title', {
      rules: [{ required: false, message: <IntlMessages id="form.required" />  }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
        prefix={
          <Icon type="skin" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Title"
        style={{width: "100%"}}
      />
    )}
    </Col>
  </FormItem>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.price.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.price.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.price" />  
  </Popover>
  }>

  <Col >
    {getFieldDecorator('price', {
      rules: [{ required: false, message: <IntlMessages id="form.required" />  }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
        prefix={
          <Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="price"
        style={{width: "100%"}}
      />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>

   
   <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.variation.option.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.option.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.option" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('amount', {
      rules: [{ required: true, message: 'Add the variation option' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
        autoComplete=""
        addonAfter={indentSelectAfter}
        prefix={
          <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Amount"
      />
    )}
    </Col>
    
 </FormItem>
<p>Size Starts</p>

<Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.size.width.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.size.width.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.size.width" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('width', {
              rules: [{ required: false, message: 'leave blank in no width.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="width"
                addonAfter={indentSelectAfterLength}
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.size.height.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.size.height.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.size.height" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('height', {
      rules: [{ required: false, message: 'you can leave this blank' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="height"
                addonAfter={indentSelectAfterLength}
                style={{width: "100%"}}
              />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>
  <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.size.length.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.size.length.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.size.length" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('length', {
              rules: [{ required: false, message: 'you can leave this blank.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="length"
                addonAfter={indentSelectAfterLength}
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.size.weight.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.size.weight.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.size.weight" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('weight', {
      rules: [{ required: false, message: 'you can leave this blank' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="weight"
                addonAfter={indentSelectAfterWeight}
                style={{width: "100%"}}
              />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>


<p>Size ends</p>


  <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.usage.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.usage.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.variation.usage" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('Usage', {
              rules: [{ required: false, message: 'leave blank for infiit usage.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Minimum"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.status.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.status.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.discount.status" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('Status', {
      rules: [{ required: false, message: 'Is this published or expired?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Maximum"
                style={{width: "100%"}}
              />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>

    <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.variation.code.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.code.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.code" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('code', {
      rules: [{ required: false, message: 'Add the variation code' }]
    })(
      <InputGroup compact>
    
      <Input
        autoComplete=""
        prefix={
          <Icon type="money" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Leave blank if no code required"
        style={{ width: '75%' }}
      />
       <Button
              type="primary"
              style={{ width: '25%' }}
              htmlType="submit"
              className=""
           > Generate </Button>
      </InputGroup>

    )}
    </Col>
  </FormItem>
  <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.variation.option.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.option.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.option" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('amount', {
      rules: [{ required: true, message: 'Add the variation option' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
        autoComplete=""
        addonAfter={indentSelectAfter}
        prefix={
          <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Amount"
      />
    )}
    </Col>
    </FormItem>
          <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.discount.starting.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.discount.starting.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.discount.starting" />  
          </Popover>
          }>
    
    <Col  >
    {getFieldDecorator('Starting', {
      rules: [{ required: false, message: 'Enter the starting?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <div>
      <DatePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="start date"
                style={{width: "100%"}}
              />
              <TimePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="start time"
                style={{width: "100%"}}
              />
              </div>
    )}
    </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.expiration.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.expiration.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.discount.expiration" />  
  </Popover>
  }>
  <Col  >

  
    {getFieldDecorator('expiration', {
      rules: [{ required: false, message: 'Enter the expiration?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <div>
      <DatePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="end date"
                style={{width: "100%"}}
              />
              <TimePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="end time"
                style={{width: "100%"}}
              />
              </div>
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>
  
  <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.usage.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.usage.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.variation.usage" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('Usage', {
              rules: [{ required: false, message: 'leave blank for infiit usage.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Leave blank for infinite usage"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.status.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.status.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.discount.status" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('Status', {
      rules: [{ required: false, message: 'Is this published or expired?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Select
      mode=""
      style={{ width: '100%' }}
      onChange={this.handleCategoryChange}
    >
        <Option value="true">True</Option>
        <Option value="false">False</Option>
      
    </Select>
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>

{/* Start Questions and Comments  */}

 <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.class.name.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.class.name.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Request and Comment 
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('name', {
      rules: [{ required: true, message: 'Add the file name' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
autoComplete=""
addonAfter={indentSelectAfterQuestion}
prefix={
  <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
}
placeholder="Amount"
/>
    )}
    </Col>
  </FormItem>
  <Row gutter={12}>
  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
  
  
  <FormItem label={

    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.class.start.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.class.start.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Include Files 
  </Popover>
  }>

  <Col >
    {getFieldDecorator('startClass', {
      rules: [{ required: true, message: 'What is the minimum class?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
        prefix={
          <Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="minimum class"
        style={{width: "100%"}}
      />
    )}
    </Col>
  </FormItem>
  </Col>
  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
  <FormItem label={

<Popover content={ 
<div>
{<IntlMessages id="form.part.class.end.popover.content" />} 
</div>
} title={<IntlMessages id="form.part.class.end.popover.title" />}  
trigger="click">
<Icon type="question-circle-o" 
/> Request File Upload?
</Popover>
}>
<Col  >
{getFieldDecorator('endClass', {
rules: [{ required: true, message: 'Enter the maximum class?' }],
initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
})(
<Input  
prefix={
  <Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />
}
style={{width: "100%"}}
placeholder="max class"
/>
)}
</Col>
</FormItem>
</Col>
</Row>

{/* End  Questions and Comments  */}

{/* Start Warranty */}

<Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.usage.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.usage.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.variation.usage" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('Usage', {
              rules: [{ required: false, message: 'leave blank for infiit usage.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Select
              mode=""
              style={{ width: '100%' }}
              onChange={this.handleCategoryChange}
            >
                <Option value="Used">Opened with or without pacakge</Option>
                <Option value="slightly">Open with Package</Option>
                <Option value="New">Unopened</Option>
                <Option value="New">Sealed</Option>

              
            </Select>
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.status.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.status.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Used  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('Status', {
      rules: [{ required: false, message: 'Is this published or expired?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Select
      mode=""
      style={{ width: '100%' }}
      onChange={this.handleCategoryChange}
    >
        <Option value="Used">True</Option>
        <Option value="slightly">Slightly</Option>
        <Option value="New">False</Option>
      
    </Select>
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>


<Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.usage.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.usage.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> Refund
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('Usage', {
              rules: [{ required: false, message: 'leave blank for infiit usage.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Select
              mode=""
              style={{ width: '100%' }}
              onChange={this.handleCategoryChange}
            >
                <Option value="Used">Full Refund</Option>
                <Option value="New">Store Credit</Option>
                <Option value="slightly">1%</Option>
                <Option value="New">2%</Option>
            </Select>
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.status.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.status.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Timeframe  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('Status', {
      rules: [{ required: false, message: 'Is this published or expired?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
      autoComplete=""
      addonAfter={indentSelectAfterWarranty}
      prefix={
        <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
      }
      placeholder="Amount"
    />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>

{/* End  Warranty  */}

{/* Start  Lifespan  */}


<Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.usage.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.usage.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> Shelf Life
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('Usage', {
              rules: [{ required: false, message: 'leave blank for infiit usage.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input
              autoComplete=""
              addonAfter={indentSelectAfterLifespan}
              prefix={
                <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="Amount"
            />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.status.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.status.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Give or Take  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('Status', {
      rules: [{ required: false, message: 'Is this published or expired?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
      autoComplete=""
      addonAfter={indentSelectAfterLifespan}
      prefix={
        <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
      }
      placeholder="Amount"
    />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>


<Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.usage.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.usage.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> Hint
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('Usage', {
              rules: [{ required: false, message: 'leave blank for infiit usage.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input
              autoComplete=""
              addonAfter={indentSelectAfterLifespan}
              prefix={
                <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="Amount"
            />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.status.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.status.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Expand Life
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('Status', {
      rules: [{ required: false, message: 'Is this published or expired?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
      autoComplete=""
      prefix={
        <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
      }
      placeholder="Amount"
    />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>
{/* End  Lifespan  */}
  
  <FormItem label="Description" {...formItemLayout}>
            {getFieldDecorator('Notes', {
              rules: [
                {
                  required: true,
                  message: 'Please better describe your files.'
                },
              ],
              initialValue: (this.state.editingFile ? this.state.editingFile.notes : '')
            })(
              <TextArea
                row={2}
                prefix={
                  <Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="text"
                placeholder="Leave a note for delivery services"
              />
            )}
          </FormItem>
          <FormItem label="Delivery Considerations" {...formItemLayout}>
            {getFieldDecorator('Considerations', {
              rules: [{ required: true, message: ' Category' }],
              initialValue: this.state.editingFile ? this.state.editingFile.categories : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleCategoryChange}
              >
                <OptGroup label="Personal">
                  <Option value="self">Birth Certificate</Option>
                  <Option value="jessica">Jessica (Daughter)</Option>
                </OptGroup>
                <OptGroup label="Education">
                  <Option value="lisa">Transcript</Option>
                  <Option value="keven">Application</Option>
                </OptGroup>
              </Select>
            )}
          </FormItem>
          <FormItem label="Considerations" {...formItemLayout}>
            {getFieldDecorator('Considerations', {
              rules: [{ required: true, message: 'File Considerations' }],
              initialValue: this.state.editingFile ? this.state.editingFile.categories : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleCategoryChange}
              >
                <OptGroup label="Personal">
                  <Option value="self">Birth Certificate</Option>
                  <Option value="jessica">Jessica (Daughter)</Option>
                </OptGroup>
                <OptGroup label="Education">
                  <Option value="lisa">Transcript</Option>
                  <Option value="keven">Application</Option>
                </OptGroup>
              </Select>
            )}
          </FormItem>
          
          
          <FormItem label="." {...formItemLayout}>
              {this.state.showErrorMessage &&
                <Alert
                  message="You must upload file"
                  type="error"
                  showIcon
                  banner
                  closable
                />
              }
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={this.handleSubmit}
              htmlType="submit"
              className="login-form-button"
            >
              {!this.state.editingFile && <span>Add File</span>}
              {this.state.editingFile && <span>Update File</span>}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ Documents }) {
  return {
    loading: Documents.loading,
    error: Documents.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    uploadFile: file => dispatch(addFile(file))
  };
}

const WrappedFileManagementForm = Form.create()(FileManagementForm);
export default connect(mapStateToProps, mapDispatchToProps)(
  WrappedFileManagementForm
);
