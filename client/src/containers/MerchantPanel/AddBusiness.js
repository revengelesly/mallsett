import React from 'react';
import { Icon } from 'antd';
import Box from '../../components/utility/box';
import AddBusinessIntro from './Forms/AddBusinessIntro';
import TouchUp from './Forms/TouchUp';
import BusinessCardHorizontal from './Forms/BusinessCardHorizontal';
import AddMerchant from './Forms/AddMerchant';
import AddBusinessTabComponent from './Forms/AddBusinessTabComponent';
import Services from './Forms/Services';
import { getView } from '../../helpers/utility';
import { ViewPort } from '../../helpers/constants';

import Tabs, { TabPane } from '../../components/uielements/tabs';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import LoginUser from '../UserPanel/Forms/LoginUser';
import RegisterUser from '../UserPanel/Forms/RegisterUser';
import RequestUserPassword from '../UserPanel/Forms/RequestUserPassword';

class PlugBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      changing: true,
      formState: 1,
      disabledTabs: new Array(13).fill(true, 1),
      tabMenuPositon: 'top',
      associates: new Array(13).fill([], 2)
    };
  }

  next = () => {
    const current = this.getCurrent() + 1;
    this.setState({ current });
    let disabledTabs = this.state.disabledTabs;
    disabledTabs[current] = false;
    this.setState({
      current,
      disabledTabs
    });
  };

  prev = () => {
    const current = this.getCurrent() - 1;
    this.setState({ current });
  };

  getCurrent = () => {
    if (this.props.isLoggedIn) {
      return this.state.current;
    }

    return this.state.current > 1 ? 0 : this.state.current;
  };

  handleTabChange = key => {
    this.setState({
      formState: key
    });
  };

  handleMainTabChange = (key) => {
    if (!this.state.disabledTabs[parseInt(key, 10)]) {
      this.setState({
        current: parseInt(key, 10)
      });
    }
  };

  handleWindowResize = () => {
    this.setState({
      tabMenuPositon: getView() === ViewPort.DesktopView ? 'right' : 'top'
    });
  };

  bindDataToState = merchant => {
    let associates = this.state.associates;
    if (merchant && merchant.associates && merchant.associates.length > 0) {
      associates[2] = merchant.associates.filter(x => x.category === 'parent');
      associates[3] = merchant.associates.filter(x => x.category === 'child');
      associates[4] = merchant.associates.filter(
        x => x.category === 'supplier'
      );
      associates[5] = merchant.associates.filter(
        x => x.category === 'b2b_customers'
      );
      associates[6] = merchant.associates.filter(
        x => x.category === 'services'
      );
      associates[7] = merchant.associates.filter(
        x => x.category === 'competitors'
      );
      associates[8] = merchant.associates.filter(
        x => x.category === 'associations'
      );
      associates[9] = merchant.associates.filter(
        x => x.category === 'pos'
      );
      associates[10] = merchant.associates.filter(
        x => x.category === 'credit'
      );
    }

    this.setState({
      associates
    });

    return associates;
  };

  handleDisableTabs = (merchant, associates) => {
    let disabledTabs = this.state.disabledTabs;

    if (merchant && merchant.place) {
      disabledTabs = disabledTabs.fill(false, 0, 2);

      if (associates.length > 0) {
        for (let i = 0; i < associates.length; i++) {
          if (associates[i] && associates[i].length > 0) {
            disabledTabs = disabledTabs.fill(false, 0, i + 1);

            if ((i === 4 || i === 6 || i === 8) && associates[i].length < 3) {
              disabledTabs = disabledTabs.fill(true, i + 1);
              break;
            }
          }
        }
      }
    } else {
      disabledTabs = disabledTabs.fill(true, 1);
    }

    this.setState({
      disabledTabs: disabledTabs
    });
  }

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);

    if (this.props.isLoggedIn && this.props.profile) {
      let associates = this.bindDataToState(this.props.merchant);
      this.handleDisableTabs(this.props.merchant, associates);
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoggedIn && nextProps.profile) {
      let associates = this.bindDataToState(nextProps.merchant);
      this.handleDisableTabs(nextProps.merchant, associates);
    }
  };

  render() {
    let step1Content = <LoginUser login={this.props.login} />;
    switch (this.state.formState) {
      case '3':
        step1Content = (
          <RegisterUser
            login={this.props.login}
            handleTabChange={this.handleTabChange}
          />
        );
        break;
      case '5':
        step1Content = (
          <RequestUserPassword handleTabChange={this.handleTabChange} />
        );
        break;
      default:
        step1Content = (
          <LoginUser
            login={this.props.login}
            handleTabChange={this.handleTabChange}
            idToken={this.props.idToken}
          />
        );
        break;
    }

    let steps = [
      {
        title: 'Login or Register',
        icon: 'lock',
        content: step1Content,
        description: 'Please login or register so you can add your business',
        help: 'soemthing here to help'
      },
      {
        title: '2 Minute Intro',
        icon: 'bell',
        content: <AddBusinessIntro />,
        description:
          'Watch this short video and learn more about plugging your business with other businesses and consumers.',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Business',
        icon: 'environment-o',
        content: (
          <BusinessCardHorizontal
            key="merchant"
            category="merchant"
            places={
              this.props.merchant && this.props.merchant.place
                ? [this.props.merchant.place]
                : []
            }
            handleUpdateMerchant={this.props.handleUpdateMerchant}
            {...this.props}
          />
        ),
        disabledNext: this.props.merchant && this.props.merchant.place ? false : true,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Parent Company',
        icon: 'team',
        content: (
          <BusinessCardHorizontal
            key="parent"
            category="parent"
            places={this.state.associates[2]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Child Company',
        icon: 'usergroup-add',
        content: (
          <BusinessCardHorizontal
            key="child"
            category="child"
            places={this.state.associates[3]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Suppliers',
        icon: 'shopping-cart',
        content: (
          <BusinessCardHorizontal
            key="supplier"
            category="supplier"
            places={this.state.associates[4]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
          />
        ),
        disabledNext: this.state.associates[4] && this.state.associates[4].length > 2 ? false : true,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'B2B Customers',
        icon: 'shop',
        content: (
          <BusinessCardHorizontal
            key="b2b_customers"
            category="b2b_customers"
            places={this.state.associates[5]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Professional Services',
        icon: 'user',
        content: (
          <BusinessCardHorizontal
            key="services"
            category="services"
            places={this.state.associates[6]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
          />
        ),
        disabledNext: this.state.associates[6] && this.state.associates[6].length > 2 ? false : true,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Competitor Tracker',
        icon: 'meh-o',
        content: (
          <BusinessCardHorizontal
            key="competitors"
            category="competitors"
            places={this.state.associates[7]}
            handleUpdateMerchant={this.props.handleUpdateAssociate}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Business Associations',
        icon: 'global',
        content: (
          <BusinessCardHorizontal
            key="associations"
            category="associations"
            places={this.state.associates[8]}
            handleUpdateMerchant={this.props.handleUpdateAssociate}
            {...this.props}
          />
        ),
        disabledNext: this.state.associates[8] && this.state.associates[8].length > 2 ? false : true,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Marketing Services',
        icon: 'desktop',
        content: <Services />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Government',
        icon: 'desktop',
        content: <Services />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'POS Systems',
        icon: 'desktop',
        content: <BusinessCardHorizontal
                    key="pos"
                    category="pos"
                    places={this.state.associates[9]}
                    handleUpdateAssociate={this.props.handleUpdateAssociate}
                    {...this.props}
                  />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Credit Card Processor',
        icon: 'credit-card',
        content: <BusinessCardHorizontal
                    key="credit"
                    category="credit"
                    places={this.state.associates[10]}
                    handleUpdateAssociate={this.props.handleUpdateAssociate}
                    {...this.props}
                  />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Closing Details',
        icon: 'profile',
        content: <AddMerchant merchant={this.props.merchant} {...this.props} />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Preview',
        icon: 'trophy',
        content: <TouchUp />,
        description: '',
        help: 'soemthing here to help'
      }
    ];

    let filteredSteps = this.props.isLoggedIn
      ? steps.slice(1, steps.length)
      : steps.slice(0, 2).reverse();

    return (
      <LayoutWrapper>
        <Box>
          <Tabs
            activeKey={`${this.state.current}`}
            onChange={this.handleMainTabChange}
            size="small"
            // tabPosition="right"
            tabPosition={this.state.tabMenuPositon}
          >
            {filteredSteps.map((step, i) => (
              <TabPane
                tab={
                  <span>
                    <Icon type={step.icon} />
                    {step.title}
                  </span>
                }
                disabled={this.state.disabledTabs[i]}
                key={i}
              >
                <AddBusinessTabComponent
                  title={step.title}
                  help={step.help}
                  description={step.description}
                  content={step.content}
                  isDisplayPrevious={this.state.current > 0}
                  isDisplayNext={
                    filteredSteps.length > 0 &&
                    (this.state.current < filteredSteps.length - 1 ||
                      step.title.indexOf('Login') >= 0)
                  }
                  isDisabledNext={step.title.indexOf('Login') >= 0 || step.disabledNext}
                  isDisplayDone={
                    this.state.current === filteredSteps.length - 1 &&
                    step.title.indexOf('Login') < 0
                  }
                  isDisabledDone={false}
                  handleNext={this.next}
                  handlePrevious={this.prev}
                />
              </TabPane>
            ))}
          </Tabs>
        </Box>
      </LayoutWrapper>
    );
  }
}
export default PlugBusiness;
