import React from 'react';
import PageHeader from '../../components/utility/pageHeader';
import { Row, Col } from 'antd';

const TabsUser = (props) =>{ 
    return(
      <div>
        <Row gutter={0}>
          <PageHeader>
            {props.data.header}
          </PageHeader>
        </Row>
        <Row gutter={24}>
          <Col span={props.data.formWidth}>
            {props.data.form}
          </Col>
          <Col span={props.data.itemWidth}>
            {props.data.item}
          </Col>
        </Row>
      </div>
      );
  };

export default TabsUser;