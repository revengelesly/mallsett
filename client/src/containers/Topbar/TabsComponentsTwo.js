import React from 'react';
import PageHeader from '../../components/utility/pageHeader';
import { Row, Col } from 'antd';

const TabsUser = (props) =>{ 
    return(
      <div>
        <Row gutter={0}>
          <PageHeader>
            {props.compData.header=""}
          </PageHeader>
        </Row>
        <Row gutter={24}>
          <Col span={props.compData.formWidth=""}>
            {props.compData.form=""}
          </Col>
          <Col span={props.compData.itemWidth=""}>
            {props.compData.item=""}
          </Col>
        </Row>
      </div>
      );
  };

export default TabsUser;