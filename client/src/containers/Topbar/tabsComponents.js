import React from 'react';
import PageHeader from '../../components/utility/pageHeader';
import { Row, Col } from 'antd';

const TabsUser = (props) =>{ 
    return(
      <div>

        <Row gutter={48} >
        
          <Col span={props.data.formWidth} xs={24} sm={16} md={14} lg={12} xl={12}>
          <PageHeader>
            {props.data.header}
          </PageHeader>
            {props.data.form}
          </Col>
          <Col span={props.data.itemWidth} xs={24} sm={8} md={10} lg={12} xl={12}>
            {props.data.item}
          </Col>
        </Row>
      </div>
      );
  };

export default TabsUser;