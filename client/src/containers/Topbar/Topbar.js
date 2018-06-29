import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon, Menu, Dropdown } from 'antd';
import appActions from '../../redux/app/actions';
import TopbarUser from './topbarUser';
import TopbarAddBusiness from './topbarAddBusiness';
import TopbarWrapper from './topbar.style';
import themes from '../../settings/themes';
import { themeConfig } from '../../settings';
import { withRouter } from 'react-router';
const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  state = {
    isOnDashboard: false,
    displayAddBusinessModal: false
  };

  handleMenuClick = (e) => {
    if (e.key === 'addNew') {
      this.setState({
        displayAddBusinessModal: true
      });
    }
  }

  componentDidMount = () => {
    this.setState({
      isOnDashboard:
        this.props.location &&
        this.props.location.pathname.indexOf('dashboard') > -1
    });
  };

  render() {
    const myBusinessMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="0">Business Service Card Here</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="addNew">Add New Business</Menu.Item>
      </Menu>
    );

    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
          }
        >
          <div className="isoLeft">
            {this.state.isOnDashboard && <h3> MALLSETT</h3>}
          </div>

          <ul className="isoRight">
            <li
              className={
                collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            >
              <Dropdown
                overlay={myBusinessMenu}
                trigger={['click']}
                placement="bottomRight"
              >
                <div>
                  <Icon type="dashboard" />{' '}
                  <span className=""> Manage My Business </span>
                </div>
              </Dropdown>
            </li>
            <li>
              <TopbarAddBusiness isOnDashboard={this.state.isOnDashboard} displayAddBusinessModal={this.state.displayAddBusinessModal} />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: 'user' })}
              className="isoUser"
            >
              <TopbarUser />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      ...state.App.toJS()
    }),
    { toggleCollapsed }
  )(Topbar)
);
