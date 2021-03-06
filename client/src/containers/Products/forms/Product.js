import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Select,
  Input,
  Popover,
  Icon,
  Button,
  Upload,
  message
} from 'antd';

const { Option, OptGroup } = Select;
const Dragger = Upload.Dragger;
const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


export default class  extends Component {
  render() {
    return (
      <Row gutter={24}>
        <Col span="24">
        
         
        { /******************************** 
         
              Basic Sections
              
          ******************************8*/ }
       
         {/* start brand */}
 <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.product.brand.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.product.brand.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.product.brand" />  </Popover>
          <Input style={{ width: '100%', marginTop: 5 }} />
          
          </Col>
         {/* end brand */}
         {/* start name */}
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.product.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.product.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.product.name" />  </Popover>
          <Input style={{ width: '100%', marginTop: 5 }} />
          
          </Col>
         {/* end name */}

        { /* start   image */ }
        <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <div>
                {<IntlMessages id="form.part.product.dagger.popover.title" />} 
              </div>
            } title={<IntlMessages id="form.part.product.dagger.popover.title" />}   trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.product.dagger"  />  </Popover>
            
            <Dragger {...props} style={{ width: '100%', marginTop: 5 }}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
            </Col>
         { /* end   image */ }       
         {/* start description */}
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.product.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.product.description.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.product.description" />  </Popover>
          <Input 
            type="textarea"
            autosize={{ minRows: 2, maxRows: 6 }}
            style={{ width: '100%',marginTop: 5 }}
          />
          
          </Col>
         {/* end description */}

         { /* start   category */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.product.category.popover.content" />
            } title={<IntlMessages id="form.part.product.category.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.product.category" />  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Business">
              <Option value="1">Products</Option>
              <Option value="2">Sections</Option>
            </OptGroup>
            <OptGroup label="Personal">
              <Option value="3">This</Option>
              <Option value="4">that</Option>
            </OptGroup>
            
          </Select>
          </Col>
         { /* end     category */ }
         { /* start   category */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.product.category.popover.content" />
            } title={<IntlMessages id="form.part.product.category.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> Pricing </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
              <Option value="1">Direct</Option>
              <Option value="2">Quotes</Option>
            
          </Select>
          </Col>
         { /* end     category */ }
         { /* start   category */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.product.category.popover.content" />
            } title={<IntlMessages id="form.part.product.category.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> Full Description </Popover>
          <Select
            mode= ""
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
              <Option value="1">Delivered</Option>
              <Option value="2">Pickup</Option>
              <Option value="2">Appointments</Option>
          </Select>
          </Col>
         { /* end     category */ }
         { /* start   category */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.product.category.popover.content" />
            } title={<IntlMessages id="form.part.product.category.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> Purchasing </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
              <Option value="1">Delivered</Option>
              <Option value="2">Pickup</Option>
              <Option value="2">Appointments</Option>
          </Select>
          </Col>
         { /* end     category */ }
         { /* start   Group */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.product.group.popover.content" />
            } title={<IntlMessages id="form.part.product.group.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> Group Options  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Business">
              <Option value="1">Products</Option>
              <Option value="2">Sections</Option>
            </OptGroup>
            <OptGroup label="Personal">
              <Option value="3">This</Option>
              <Option value="4">that</Option>
            </OptGroup>
            
          </Select>
          </Col>
         { /* end     Group */ }
         
         { /* start   Group */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.product.individual.popover.content" />
            } title={<IntlMessages id="form.part.product.individual.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> individual Options </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Business">
              <Option value="1">Products</Option>
              <Option value="2">Sections</Option>
            </OptGroup>
            <OptGroup label="Personal">
              <Option value="3">This</Option>
              <Option value="4">that</Option>
            </OptGroup>
            
          </Select>
          </Col>
         { /* end     Group */ }
       
         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 15, borderRadius: 0 }}>Add Product</Button>
        </Col>
      </Row>
    );
  }
}
