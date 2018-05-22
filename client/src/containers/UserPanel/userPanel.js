import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import { Icon } from 'antd';

import RegisterUser from './Forms/RegisterUser';
import LoginUser from './Forms/LoginUser';
import RequestUserPassword from './Forms/RequestUserPassword';
import SettingsUser from './Forms/SettingsUser';
import WrapAboutUsItems from './Lists/WrapAboutUsItems';
import WrapLocationItems from './Lists/WrapLocationItems';
import WrapFileItems from './Lists/WrapFileItems';
import WrapDependentItems from './Lists/WrapDependentItems';
import Dependents from './Forms/Dependents';
import Location from './Forms/Location';
import FileManagement from './Forms/FileManagement';

import TabsComponents from '../Topbar/tabsComponents';
import { getView } from '../../helpers/utility';
import { ViewPort } from '../../helpers/constants';
import axios from 'axios';
import { BaseURL } from '../../helpers/constants';
import styled from 'styled-components';

export default class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.isLoggedIn ? '1' : '4',
      itemActiveTab: '1',
      tabMenuPositon: 'top',
      locations: this.props.profile && this.props.profile.locations ? this.props.profile.locations : [],
      files: this.props.profile && this.props.profile.files ? this.props.profile.files : [],
      dependents: [],
      editingLocation: null,
      editingFile: null
    };
  }
  LOG_OUT = 'logout';

  handleTabChange = (key) => {
    if (key === this.LOG_OUT) {
      this.props.logout();
    } else {
      this.setState({
        activeTab: key
      });
    }
  }

  handleItemActiveTab = (key) => {
    this.setState({
      itemActiveTab: key
    });
  }

  handleWindowResize = () => {
    this.setState({
      tabMenuPositon: getView() === ViewPort.DesktopView ? 'right' : 'top'
    });
  }

  handleAddLocation = (newLocation) => {
    axios({
      method: 'POST',
      url: `${BaseURL}/api/profile/location`,
      data: {
        ...newLocation
      },
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        this.props.loginSuccess(this.props.idToken, res.data);
        this.setState({
          editingLocation: null
        })
      })
      .catch(err => console.log(err));
  }

  handleEditLocation = (id) => {
    let locations = this.state.locations.map(x => ({...x}));
    let location = locations.find(x => x._id === id);

    if (location) {
      this.setState({
        editingLocation: location
      });
    }
  }

  handleRemoveLocation = (id, newLocation = null) => {
    axios({
      method: 'POST',
      url: `${BaseURL}/api/profile/location/delete`,
      data: {
        'location_id': id,
        profile: this.props.profile._id
      },
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (newLocation) {
          this.handleAddLocation(newLocation)
        } else {
          this.props.loginSuccess(this.props.idToken, res.data);
        }
      })
      .catch(err => console.log(err));
  }

  handleAddDependent = (dependent) => {
    let dependents = this.state.dependents.map(x => ({...x}));
    dependents.push(dependent);
    this.setState({
      dependents: dependents
    });
  }

  handleAddFile = (file) => {
    axios({
      method: 'POST',
      url: `${BaseURL}/api/profile/file`,
      data: {
        ...file
      },
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.data) {
          this.props.loginSuccess(this.props.idToken, res.data);
          this.setState({
            editingFile: null
          });
        }
      })
      .catch(err => console.log(err));
  }

  handleRemoveFile = (id, newFile = null) => {
    axios({
      method: 'POST',
      url: `${BaseURL}/api/profile/file/delete`,
      data: {
        'file_id': id,
        profile: this.props.profile._id
      },
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (newFile) {
          this.handleAddFile(newFile);
        } else {
          this.props.loginSuccess(this.props.idToken, res.data);
        }
      })
      .catch(err => console.log(err));
  }

  handleEditFile = (id) => {
    console.log(id)
    let files = this.state.files.map(x => ({...x}));
    let file = files.find(x => x._id === id);

    if (file) {
      this.setState({
        editingFile: file
      });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.profile && nextProps.profile.locations) {
      this.setState({
        locations: nextProps.profile.locations
      })
    }

    if (nextProps.profile && nextProps.profile.files) {
      console.log(nextProps.profile.files)
      this.setState({
        files: nextProps.profile.files
      })
    }

    if (nextProps.dependents) {
      this.setState({
        dependents: nextProps.dependents
      });
    }
  }

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      if (this.props.isLoggedIn) {
        this.handleTabChange('1');
      } else {
        this.handleTabChange('4');
      }
    }
  }

  render(props){
    let data = [
      {
        header: "My Dependents",
        icon: "usergroup-add",
        nav: "Dependents",
        form:  <Dependents handleItemActiveTab={this.handleItemActiveTab} {...this.props} />,
        item: <WrapDependentItems activeKey={this.state.itemActiveTab} dependents={this.state.dependents} {...this.props} />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }      ,
      {
        header: "My Locations",
        icon: "environment-o",
        nav: "Locations",
        form:  <Location
          handleItemActiveTab={this.handleItemActiveTab}
          handleAddLocation={this.handleAddLocation}
          editingLocation={this.state.editingLocation}
          handleRemoveLocation={this.handleRemoveLocation}
          key="location"
          {...this.props}
        />,
        item: <WrapLocationItems
          activeKey={this.state.itemActiveTab}
          locations={this.state.locations}
          handleEditButton={this.handleEditLocation}
          handleRemoveButton={this.handleRemoveLocation}
          key="locationItem"
        />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }  ,
      {
        header: "My Files and Documents",
        icon: "paper-clip",
        nav: "Documents",
        form:  <FileManagement
                  handleItemActiveTab={this.handleItemActiveTab}
                  handleAddFile={this.handleAddFile}
                  editingFile={this.state.editingFile}
                  handleRemoveFile={this.handleRemoveFile}
                  {...this.props}
                />,
        item: <WrapFileItems
                  activeKey={this.state.itemActiveTab}
                  files={this.state.files}
                  handleEditButton={this.handleEditFile}
                  handleRemoveButton={this.handleRemoveFile}
              />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }  ,
      {
        icon: "lock",
        nav: "Register",
        header: "Register",
        form:  <RegisterUser login={this.props.login} handleTabChange={this.handleTabChange} {...this.props} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: !this.props.isLoggedIn
      },
      {
        nav: "Login",
        icon: "unlock",
        header: "Login",
        form:  <LoginUser login={this.props.login} handleTabChange={this.handleTabChange} idToken={this.props.idToken} {...this.props} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: !this.props.isLoggedIn
      } ,
      {
        header: "Forgot Password",
        icon: "question-circle-o",
        nav: "Forgot Password",
        form:  <RequestUserPassword  handleTabChange={this.handleTabChange} {...this.props} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: !this.props.isLoggedIn
      } ,
       {
        header: "Account Settings",
        icon: "tool",
        nav: "Settings",
        form:  <SettingsUser login={this.props.login} profile={this.props.profile} />,
        item: <WrapAboutUsItems />,
        formWidth: "12",
        itemWidth: '12',
        isDisplay: this.props.isLoggedIn
      }
    ]
    return (
      <LayoutWrapper>
        <Box >
          <div className="card-container">

            <Tabs
              tabPosition={this.state.tabMenuPositon}
              size="small"
              activeKey={this.state.activeTab}
              onChange={this.handleTabChange}
            >
              {data.map((compData, i) => (
                compData.isDisplay &&
              <TabPane   tab={<span><Icon type={compData.icon} />{compData.nav}</span>} key={i}>
                <TabsComponents key={i} data={compData} itemActiveTab={this.state.itemActiveTab} />
              </TabPane>
              ))}

              {this.props.isLoggedIn &&
                <TabPane tab={<span style={{marginTop: '200px', backgroundColor: 'red', width: '100%'}}><Icon type="logout" />Logout</span>} key={this.LOG_OUT} />
              }
            </Tabs>
          </div>
        </Box>
      </LayoutWrapper>
    );
  }
  }
