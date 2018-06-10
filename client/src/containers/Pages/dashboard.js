import React, { Component } from 'react';
import { connect } from 'react-redux';

import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import { Row, Col, Tabs, Timeline } from 'antd';
import ItemMerchant from '../Products/items/ItemMerchant';
import BusinessRequestComponent from '../MerchantPanel/Forms/BusinessRequestComponent';
import merchantAction from '../../redux/merchant/actions';
import { BaseURL } from '../../helpers/constants';
import axios from 'axios';

const { setMerchant, updateAssociate } = merchantAction;
const TabPane = Tabs.TabPane;

class Dashboard extends Component {
  updateStatus = (merchantId, associateId, connectedStatus) => {
    console.log(merchantId);
    console.log(associateId);
    console.log(connectedStatus);

    axios({
      method: 'POST',
      url: `${BaseURL}/api/merchant/updateStatus`,
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        merchantId,
        associateId,
        connectedStatus
      },
    }).then(res => {
      console.log(res.data)
      this.props.setMerchant(res.data);
    })
    .catch(err => console.log(err));
  }


  handleAccept = (associateId) => {
    this.updateStatus(this.props.merchant._id, associateId, 'accepted');
  }

  handleReject = (associateId) => {
    this.updateStatus(this.props.merchant._id, associateId, 'rejected');
  }

  handleRequest = (associateId) => {
    this.updateStatus(this.props.merchant._id, associateId, 'requested');
  }

  render() {
    let businesses = [];

    return (
      <LayoutContentWrapper>
        <LayoutContent>
          <h3>
            <i className="fas fa-plug" /> Connect{' '}
          </h3>

          <Row gutter={6} style={{ marginBottom: 15, marginTop: 10 }}>
            <Col className="" xs={24} sm={12} md={12} lg={6} xl={6}>
              <h4> Recent Activity </h4>
              <Timeline>
                <Timeline.Item color="green">
                  Accepted by Walmart 2018-06-01
                </Timeline.Item>
                <Timeline.Item color="green">
                  Accepted Target 2018-05-01
                </Timeline.Item>
                <Timeline.Item color="red">
                  Rejected by Home Depot 2018-04-01
                </Timeline.Item>
                <Timeline.Item color="red">
                  Rejected by Asheleys 2018-04-01
                </Timeline.Item>
                <Timeline.Item color="orange">
                  Pending from Big Lot 2018-04-01
                </Timeline.Item>
              </Timeline>
            </Col>
            <Col className="" xs={24} sm={12} md={12} lg={18} xl={18}>
              <Row gutter={6} style={{ marginBottom: 15 }}>
                <Col
                  className="gutter-row"
                  xs={0}
                  sm={0}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <Tabs defaultActiveKey="1" tabPosition="right" size="small">
                    <TabPane tab={<span>Received</span>} key="1">
                      <BusinessRequestComponent
                        title="Received Merchant"
                        type="received"
                        businesses={this.props.merchant && this.props.merchant.associates.filter(x => x.connectedStatus === "received")}
                        total={businesses.length}
                        handleAccept={this.handleAccept}
                        handleReject={this.handleReject}
                      />
                    </TabPane>

                    <TabPane tab={<span>Accepted</span>} key="2">
                      <BusinessRequestComponent
                        title="Accepted Merchant"
                        type="accepted"
                        businesses={this.props.merchant && this.props.merchant.associates.filter(x => x.connectedStatus === "accepted")}
                        total={businesses.length}
                        handleReject={this.handleReject}
                      />
                    </TabPane>
                    <TabPane tab={<span>Rejected</span>} key="3">
                      <BusinessRequestComponent
                        title="Rejected Merchant"
                        type="rejected"
                        businesses={this.props.merchant && this.props.merchant.associates.filter(x => x.connectedStatus === "rejected")}
                        total={businesses.length}
                        handleAccept={this.handleAccept}
                      />
                    </TabPane>
                    <TabPane tab={<span>Requested</span>} key="4">
                      <BusinessRequestComponent
                        title="Requested Merchant"
                        type="requested"
                        businesses={this.props.merchant && this.props.merchant.associates.filter(x => x.connectedStatus === "requested")}
                        total={businesses.length}
                      />
                    </TabPane>
                    <TabPane tab={<span>Denied</span>} key="5">
                      <BusinessRequestComponent
                        title="Denied Merchant"
                        type="denied"
                        businesses={this.props.merchant && this.props.merchant.associates.filter(x => x.connectedStatus === "denied")}
                        total={businesses.length}
                        handleRequest={this.handleRequest}
                      />
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </Col>
          </Row>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn:
      state.Auth.get('idToken') !== null &&
      state.Auth.get('idToken') !== 'LOGIN_ERROR',
    profile: state.Auth.get('profile'),
    idToken: state.Auth.get('idToken'),
    merchant: state.Merchant.get('merchant'),
    ...state.App.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMerchant: merchant => dispatch(setMerchant(merchant)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
