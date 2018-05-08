import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from '../../components/uielements/menu';
import IntlMessages from '../../components/utility/intlMessages';
import SidebarWrapper from './sidebar.style';

import appActions from '../../redux/app/actions';
import LogoLight from '../../components/utility/logoLight';
import { rtl } from '../../config/withDirection';
import { getCurrentTheme } from '../ThemeSwitcher/config';
import { themeConfig } from '../../config';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Sider } = Layout;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed,
} = appActions;

const sidebarPages = [
  {
    key: 'productPage',
    link: 'productPage',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ion-tshirt-outline',
    position: 1
  }, {
    key: 'deliveryService',
    link: 'deliveryService',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'model-s',
    position: 1
  }, {
    key: 'onDemand',
    link: 'onDemand',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ion-model-s',
    position: 1
  },{
    key: 'schedule',
    link: 'schedule',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'clock',
    position: 1
  }, {
    key: 'marketing',
    link: 'marketing',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'speakerphone',
    position: 1
  }, {
    key: 'couponing',
    link: 'couponing',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'calculator',
    position: 1
  }, {
    key: 'financing',
    link: 'financing',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'cash',
    position: 1
  },{
    key: 'staffs',
    link: 'staffs',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'bowtie',
    position: 1
  }, {
    key: 'authorizations',
    link: 'authorizations',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'key',
    position: 1
  },{
    key: 'customers',
    link: 'customers',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-people',
    position: 1
  }, {
    key: 'generalInfo',
    link: 'shoppingService',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-cart-outline',
    position: 1
  }, {
    key: 'dashboard',
    link: 'dashboard',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-cart-outline',
    position: 1
  }, {
    key: 'dashboard',
    link: 'dashboard',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-speedometer-outline',
    position: 1
  }, {
    key: 'Businesses',
    link: 'dashboard',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-briefcase-outline',
    position: 1
  }, {
    key: 'Suppliers',
    link: 'dashboard',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'earth',
    position: 1
  }, {
    key: 'Message',
    link: 'dashboard',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'earth',
    position: 1
  }, {
    key: 'issues',
    link: 'issues',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'earth',
    position: 1
  }, {
    key: 'meetings',
    link: 'meetings',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-people',
    position: 1
  }, {
    key: 'staffFunEvents',
    link: 'meetings',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ion-ios-wineglass',
    position: 1
  }, {
    key: 'teleCommunication',
    link: 'meetings',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-football',
    position: 1
  }, {
    key: 'ideas',
    link: 'ideas',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-lightbulb-outline',
    position: 1
  }, {
    key: 'localMusician',
    link: 'ideas',
    style: 'submenuColor',
    iconStyle: 'ion',
    icon: 'ios-musical-notes',
    position: 1
  }
];

class SideBarPages extends Component {
    render() {
      return(
        <div>
  {sidebarPages.map(page => {
              <Menu.Item key={page.key}>
                <Link to={`{page.key}/{page.style}`}>
                  <span className="isoMenuHolder" style={page.key}>
                    <i className= {page.icon}/>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.{page.key}" /> something
                    </span>
                  </span>
                </Link>
              </Menu.Item>
            })}
            </div>
    )}
    
}

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === 'MobileView') {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };

  renderView({ style, ...props }) {
    const viewStyle = {
      marginRight: rtl === 'rtl' ? '0' : '-17px',
      paddingRight: rtl === 'rtl' ? '0' : '9px',
      marginLeft: rtl === 'rtl' ? '-17px' : '0',
      paddingLeft: rtl === 'rtl' ? '9px' : '0',
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }

  render() {
    const { url, app, toggleOpenDrawer } = this.props;
    const customizedTheme = getCurrentTheme('sidebarTheme', themeConfig.theme);
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor,
    };
    const submenuColor = {
      color: customizedTheme.textColor,
    };
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width="240"
          className="isomorphicSidebar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <LogoLight />
          <Scrollbars
            renderView={this.renderView}
            style={{ height: scrollheight - 70 }}
          >
            <Menu
              onClick={this.handleClick}
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
              className="isoDashboardMenu"
            >
              <Menu.Item key="businessOverview">
                <Link to={`${url}/businessOverview`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-speedometer" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.businessOverview" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="purchaseFromSuppliers"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-bag" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.supplies" />
                    </span>
                  </span>
                }
              >
                <Menu.Item key="supplies">
                  <Link to={`${url}/buy-wholesale`}>
                    <span className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.productWholesale" />
                      </span>
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="b2bService">
                  <Link to={`${url}/business-2-business-services`}>
                    <span className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.b2bService" />
                      </span>
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="b2bEquipment">
                  <Link to={`${url}/business-2-business-equipments`}>
                    <span className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.b2bEquipment" />
                      </span>
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="b2bLodging">
                  <Link to={`${url}/business-2-business-lodging`}>
                    <span className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.b2bLodging" />
                      </span>
                    </span>
                  </Link>
                </Menu.Item>
              </SubMenu >
              
              <SubMenu
                key="generalSettings"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-ios-briefcase-outline" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.generalSettings" />
                    </span>
                  </span>
                }
              >
              <Menu.Item key="customerService">
                <Link to={`${url}/customer-service`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.customerService" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="finance">
                <Link to={`${url}/accounting-finance`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.finance" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="humanResource">
                <Link to={`${url}/human-resource`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.humanResource" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="profileSettings">
                <Link to={`${url}/business-profile-settings`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.profileSettings" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="businessLocations">
                <Link to={`${url}/businessLocations`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.businessLocations" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              </SubMenu >
              
                <SubMenu
                key="productPage"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-tshirt-outline" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.productPage" />
                    </span>
                  </span>
                }
              >
              
              <Menu.Item key="addProduct">
                <Link to={`${url}/add-products`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.addProducts" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="deliveryService">
                <Link to={`${url}/add-delivery-services`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.deliveryService" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              
              <Menu.Item key="salesMarketing">
                <Link to={`${url}/sales-and-marketing`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.salesMarketing" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="promotion">
                <Link to={`${url}/discount-promotion`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.promotion" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              </SubMenu>
              <SubMenu
                key="professionalAssociation"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-ios-wineglass" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.professionalAssociation" />
                    </span>
                  </span>
                }
              >
             
              <Menu.Item key="businessNews">
                <Link to={`${url}/business-news`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.businessNews" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="affiliations">
                <Link to={`${url}/business-affiliations`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.affiliations" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="education">
                <Link to={`${url}/education`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.education" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              
          
              <Menu.Item key="researchAndDevelopment">
                <Link to={`${url}/events`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <span className="nav-text">
                      <IntlMessages id="sidebar.events" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
               </SubMenu>
              <Menu.Item key="help">
                <Link to={`${url}/plugg-help-and-tutorials`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-help" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.help" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>
              
              
            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

export default connect(
  state => ({
    app: state.App.toJS()
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
