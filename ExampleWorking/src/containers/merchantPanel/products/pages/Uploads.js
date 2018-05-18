import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import FormUploads from '../forms/formUploads';
import UploadList from '../lists/UploadList';
import { 
  Row, 
  Collapse,
  Col,
  Icon
} from 'antd';

const Panel = Collapse.Panel;


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <Col span="10">
          <FormUploads />
        </Col>
        <Col span="14">
        <h4  style={{marginBottom: 15}}> Time List </h4>
              <UploadList />
        </Col>
      </Row>
    );
  }
}
