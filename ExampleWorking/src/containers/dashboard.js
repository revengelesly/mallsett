import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import { Tabs } from 'antd';
import FrontPageMerchantCard from '../components/PanelMerchants/Forms/FrontPageMerchantCard';
import BuildYourMall from './BuildYourMall';
import ShopYourMall from './ShopYourMall';
import CheckOut from './CheckOut';
import Input, { InputGroup } from '../components/uielements/input';
import IntlMessages from '../components/utility/intlMessages';
import { Steps, Button, message, Icon, Popover, Pagination } from 'antd';
import { Row, Col } from 'antd';
import Select, { SelectOption } from '../components/uielements/select';
import { connect } from 'react-redux';
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const TabPane = Tabs.TabPane;

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
class Dashboard extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false)this.props.history.push("/signin")
    console.log(this.props)
  }

  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
            <Row gutter={8}  style={{ marginTop: '0px'}}>
              <Col span="24">
              quick message here
              </Col>
            </Row>
            <Row gutter={8}  style={{ marginTop: '15px'}}>
              <Col span="24">
                <BuildYourMall />
              </Col>
            </Row>
            <Row gutter={8}  style={{ marginTop: '15px'}}>
              <Col span="18" >
                <ShopYourMall /> 
              </Col>
              <Col span="6">
                
              </Col>
            </Row>
      </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
export default connect(mapStateToProps)(Dashboard)