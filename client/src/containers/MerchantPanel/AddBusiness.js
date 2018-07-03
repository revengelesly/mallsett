import React from 'react';
import { Icon, message } from 'antd';
import Box from '../../components/utility/box';
import AddBusinessIntro from './Forms/AddBusinessIntro';
import TouchUp from './Forms/TouchUp';
import BusinessCardHorizontal from './Forms/BusinessCardHorizontal';
import AddMerchant from './Forms/AddMerchant';
import AddBusinessTabComponent from './Forms/AddBusinessTabComponent';
import { getView } from '../../helpers/utility';
import { ViewPort } from '../../helpers/constants';

import Tabs, { TabPane } from '../../components/uielements/tabs';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import LoginUser from '../UserPanel/Forms/LoginUser';
import RegisterUser from '../UserPanel/Forms/RegisterUser';
import RequestUserPassword from '../UserPanel/Forms/RequestUserPassword';
import { BaseURL } from '../../helpers/constants';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });

class PlugBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      changing: true,
      formState: 1,
      disabledTabs: new Array(18).fill(true, 1),
      tabMenuPositon: 'top',
      associates: new Array(16).fill([], 2),
      gallery: [],
      fields: {
        bio: { value: this.props.merchant && this.props.merchant.detail.bio },
        businessEmail: {
          value: this.props.merchant && this.props.merchant.businessEmail
        },
        businessType: {
          value: this.props.merchant && this.props.merchant.businessType
        },
        personalEmail: {
          value: this.props.merchant && this.props.merchant.personalEmail
        },
        phone: { value: this.props.merchant && this.props.merchant.phone },
        privacy: {
          value: this.props.merchant && this.props.merchant.detail.privacy
        },
        targetType: {
          value: this.props.merchant && this.props.merchant.targetType
        },
        terms: {
          value: this.props.merchant && this.props.merchant.detail.terms
        },
        B2Bcommercial: {
          value:
            this.props.merchant && this.props.merchant.socialMedia[0] &&
            this.props.merchant.socialMedia[0].link
        },
        customersCommercial: {
          value:
            this.props.merchant && this.props.merchant.socialMedia[1] &&
            this.props.merchant.socialMedia[1].link
        }
      }
    };
  }

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
  };

  handleUploadLogoSuccess = link => {
    this.setState({
      logo: link
    });
  };

  handleUploadGallerySuccess = links => {
    this.setState({
      gallery: this.state.gallery.concat(links)
    });
  };

  handleSubmit = e => {
    let fields = this.state.fields;

    if (
      !(
        fields.businessType &&
        fields.targetType &&
        fields.personalEmail &&
        fields.phone &&
        fields.businessEmail &&
        fields.bio
      )
    ) {
      this.setState({
        showErroMessage: true
      });
    } else {
      this.setState({
        showErroMessage: false
      });

      let merchant = {
        bio:
          fields.bio.value ||
          (this.props.merchant && this.props.merchant.detail.bio),
        businessEmail:
          fields.businessEmail.value ||
          (this.props.merchant && this.props.merchant.businessEmail),
        businessType:
          fields.businessType.value ||
          (this.props.merchant && this.props.merchant.businessType),
        personalEmail:
          fields.personalEmail.value ||
          (this.props.merchant && this.props.merchant.personalEmail),
        phone:
          fields.phone.value ||
          (this.props.merchant && this.props.merchant.phone),
        privacy:
          (fields.privacy && fields.privacy.value) ||
          (this.props.merchant && this.props.merchant.detail.privacy),
        targetType:
          fields.targetType.value ||
          (this.props.merchant && this.props.merchant.targetType),
        terms:
          (fields.terms && fields.terms.value) ||
          (this.props.merchant && this.props.merchant.detail.terms)
      };
      merchant.socialMedia = [
        {
          channel: 'B2B Commercial',
          link:
            (fields.B2Bcommercial && fields.B2Bcommercial.value) ||
            (this.props.merchant &&
              this.props.merchant.socialMedia[0] &&
              this.props.merchant.socialMedia[0].link)
        },
        {
          channel: 'Customers Commercial',
          link:
            (fields.customersCommercial && fields.customersCommercial.value) ||
            (this.props.merchant &&
              this.props.merchant.socialMedia[1] &&
              this.props.merchant.socialMedia[1].link)
        }
      ];
      merchant.logo =
        this.state.logo || (this.props.merchant && this.props.merchant.logo);
      merchant.gallery =
        this.state.gallery.length > 0 ? this.state.gallery :
        (this.props.merchant && this.props.merchant.gallery);

      axios({
        method: 'POST',
        url: `${BaseURL}/api/merchant`,
        headers: {
          Authorization: this.props.idToken,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          ...this.props.merchant,
          ...merchant,
          merchant_id: this.props.merchant._id
        }
      })
        .then(res => {
          this.props.setMerchant(res.data);
          message.success('Processing complete!');
          history.push('/pages/dashboard');
        })
        .catch(err => console.log(err));
    }
  };

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

  handleMainTabChange = key => {
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
        x => x.category === 'marketingServices'
      );
      associates[10] = merchant.associates.filter(
        x => x.category === 'government'
      );
      associates[11] = merchant.associates.filter(x => x.category === 'pos');
      associates[12] = merchant.associates.filter(x => x.category === 'credit');
      associates[13] = merchant.associates.filter(x => x.category === 'mall');
      associates[14] = merchant.associates.filter(
        x => x.category === 'delivery'
      );
      associates[15] = merchant.associates.filter(
        x => x.category === 'customerService'
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
      if (
        associates[15].length > 0 &&
        merchant.businessType &&
        merchant.businessType.length > 0
      ) {
        // open all tabs
        disabledTabs.fill(false);
      }

      if (associates.length > 0) {
        for (let i = 0; i < associates.length; i++) {
          if (associates[i]) {
            disabledTabs = disabledTabs.fill(false, 0, i + 1);

            if (
              ((i === 4 || i === 6 || i === 8 || i === 10) &&
                associates[i].length < 3) ||
              (i === 9 && associates[i].length < 1)
            ) {
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
  };

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
            contents={this.props.contents}
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
        content: (
          <AddBusinessIntro
            content={
              this.props.contents &&
              this.props.contents.site &&
              this.props.contents.site.intro
            }
          />
        ),
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'merchant'
            )}
          />
        ),
        disabledNext:
          this.props.merchant && this.props.merchant.place ? false : true,
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'parent'
            )}
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'child'
            )}
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'supplier'
            )}
            requiredPlaces={3}
          />
        ),
        disabledNext:
          !this.state.associates[4] || this.state.associates[4].length < 3,
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'b2b_customers'
            )}
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'services'
            )}
            requiredPlaces={3}
          />
        ),
        disabledNext:
          !this.state.associates[6] || this.state.associates[6].length < 3,
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'competitors'
            )}
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
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'associations'
            )}
            requiredPlaces={3}
          />
        ),
        disabledNext:
          !this.state.associates[8] || this.state.associates[8].length < 3,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Marketing Services',
        icon: 'notification',
        content: (
          <BusinessCardHorizontal
            key="marketingServices"
            category="marketingServices"
            places={this.state.associates[9]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'marketingServices'
            )}
            requiredPlaces={1}
          />
        ),
        disabledNext:
          !this.state.associates[9] || this.state.associates[9].length < 1,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Government',
        icon: 'safety',
        content: (
          <BusinessCardHorizontal
            key="government"
            category="government"
            places={this.state.associates[10]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'government'
            )}
            requiredPlaces={3}
          />
        ),
        disabledNext:
          !this.state.associates[10] || this.state.associates[10].length < 3,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'POS Systems',
        icon: 'desktop',
        content: (
          <BusinessCardHorizontal
            key="pos"
            category="pos"
            places={this.state.associates[11]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'pos'
            )}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Credit Card Processor',
        icon: 'credit-card',
        content: (
          <BusinessCardHorizontal
            key="credit"
            category="credit"
            places={this.state.associates[12]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'credit'
            )}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Mall / Plaza',
        icon: 'building',
        content: (
          <BusinessCardHorizontal
            key="mall"
            category="mall"
            places={this.state.associates[13]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'mall'
            )}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Delivery & Shoppers',
        icon: 'car',
        content: (
          <BusinessCardHorizontal
            key="delivery"
            category="delivery"
            places={this.state.associates[14]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'delivery'
            )}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Customer Service',
        icon: 'customer-service',
        content: (
          <BusinessCardHorizontal
            key="customerService"
            category="customerService"
            places={this.state.associates[15]}
            handleUpdateAssociate={this.props.handleUpdateAssociate}
            {...this.props}
            suggestions={this.props.suggestions.filter(
              x => x.targeted === 'customerService'
            )}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Closing Details',
        icon: 'profile',
        content: (
          <AddMerchant
            ref="addMerchant"
            showErroMessage={this.state.showErroMessage}
            handleUploadGallerySuccess={this.handleUploadGallerySuccess}
            handleUploadLogoSuccess={this.handleUploadLogoSuccess}
            onChange={this.handleFormChange}
            merchant={this.props.merchant}
            next={this.next}
            businessType={
              this.props.contents &&
              this.props.contents.businessPanel &&
              this.props.contents.businessPanel.businessType
            }
            targetType={
              this.props.contents &&
              this.props.contents.businessPanel &&
              this.props.contents.businessPanel.targetType
            }
            {...this.props}
          />
        ),
        disabledNext: !(
          this.state.fields.businessType &&
          this.state.fields.targetType &&
          this.state.fields.personalEmail &&
          this.state.fields.phone &&
          this.state.fields.businessEmail &&
          this.state.fields.bio
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Preview',
        icon: 'trophy',
        content: (
          <TouchUp
            merchant={this.props.merchant}
            bio={
              (this.state.fields.bio && this.state.fields.bio.value) ||
              (this.props.merchant &&
                this.props.merchant.detail &&
                this.props.merchant.detail.bio) ||
              (this.props.contents && this.props.contents.site
                ? this.props.contents.site.aboutUs
                : '')
            }
            terms={
              (this.state.fields.terms && this.state.fields.terms.value) ||
              (this.props.merchant &&
                this.props.merchant.detail &&
                this.props.merchant.detail.terms) ||
              (this.props.contents && this.props.contents.site
                ? this.props.contents.site.terms
                : '')
            }
            privacy={
              (this.state.fields.privacy && this.state.fields.privacy.value) ||
              (this.props.merchant &&
                this.props.merchant.detail &&
                this.props.merchant.detail.privacy) ||
              (this.props.contents && this.props.contents.site
                ? this.props.contents.site.privacy
                : '')
            }
            gallery={
              this.state.gallery.length > 0 ? this.state.gallery :
              (this.props.merchant && this.props.merchant.gallery)
            }
            logo={
              this.state.logo || (this.props.merchant && this.props.merchant.logo)
            }
            photo={
              this.props.merchant && this.props.merchant.place.photo
            }
          />
        ),
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
                  merchant={this.props.merchant}
                  handleSubmit={this.handleSubmit}
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
                  isDisabledNext={
                    step.title.indexOf('Login') >= 0 || step.disabledNext
                  }
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
