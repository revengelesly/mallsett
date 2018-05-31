import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Icon, Menu, Dropdown } from "antd";
import appActions from "../../redux/app/actions";
import TopbarUser from "./topbarUser";
import TopbarAddBusiness from './topbarAddBusiness'; 
import TopbarWrapper from "./topbar.style";
import themes from "../../settings/themes";
import { themeConfig } from "../../settings";

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

const myBusinessMenu = (
  <Menu>
    <Menu.Item key="0">
      Business Service Card Here
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="addNew">Add New Business</Menu.Item>
  </Menu>
);

class Topbar extends Component {
  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
           <h3> MALLSETT</h3>
          </div>

          <ul className="isoRight">
            <li
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            > 
            <Dropdown overlay={myBusinessMenu} trigger={['click']} placement="bottomRight">
            <Icon type="dashboard" /> <span className=""> Manage My Business </span>
            </Dropdown>
            </li>
            <li>
            <TopbarAddBusiness />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
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

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { toggleCollapsed }
)(Topbar);
