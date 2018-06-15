import React, { Component } from 'react';
import { 
  Row, 
  Col, 
  Tabs, 
} from 'antd';
import LayoutContentWrapper from '../../components//utility/layoutWrapper';
import LayoutContent from '../../components//utility/layoutContent';
import IntlMessages from '../../components/utility/intlMessages';

import Page from '../TabPanes/Product';
import List from '../Lists/Product';

import ProductForm  from '../Products/forms/Product';
import GroupingForm  from '../Products/forms/Grouping';
import UploadForm  from '../Products/forms/Upload';
import AgeForm from '../Products/forms/Age';
import ClassForm  from '../Products/forms/Class';
import DateForm  from '../Products/forms/Date';
import FeesForm  from '../Products/forms/Fees';
import LifespanForm  from '../Products/forms/Lifespan';
import OptionsForm  from '../Products/items/Options';
import TimeForm  from '../Products/forms/Time';
import VariationsForm  from '../Products/forms/Variations';
import WholesaleForm  from '../Products/forms/Wholesale';
import WarrantyForm  from '../Products/forms/Warranty';
import SizeForm  from '../Products/forms/Size';
import DiscountForm  from '../Products/forms/Discount';
import ContentForm  from '../Products/forms/Content';
import QuestionForm from '../Products/forms/Question';
import AllForm from '../Products/forms/All';



import AgeItem from '../Products/items/Age';
import ClassItem  from '../Products/items/Class';
import DateItem  from '../Products/items/Date';
import FeesItem  from '../Products/items/Fees';
import GroupingItem  from '../Products/items/Grouping';
import LifespanItem  from '../Products/items/Lifespan';
import OptionsItem  from '../Products/items/Options';
import ProductItem  from '../Products/items/Product';
import TimeItem  from '../Products/items/Time';
import UploadItem  from '../Products/items/Upload';
import VariationsItem  from '../Products/items/Variations';
import WholesaleItem  from '../Products/items/Wholesale';
import WarrantyItem  from '../Products/items/Warranty';
import SizeItem  from '../Products/items/Size';
import DiscountItem  from '../Products/items/Discount';
import ContentItem  from '../Products/items/Content';
import QuestionItem from '../Products/items/Question';
import AllItem from '../Products/items/All';



const TabPane = Tabs.TabPane;


const steps = [
  {
    title: <IntlMessages id="form.part.all.title.tab" />,
  noIcon: 'plus-square-o',
  span: [12, 12],
  popoverTitle: ['form.part.all.title.page', 'form.part.all.list.page'],
  popoverContent:  ['form.part.all.form.popover.content', 'form.part.all.list.popover.content'],
  pageTitle:  ['form.part.all.form.page', 'form.part.all.list.page'],
  content: [<AllForm />, <List item={<AllItem />} />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '18'
}, {
  title: <IntlMessages id="form.part.product.title.tab" />,
  noIcon: 'plus-square-o',
  span: [12, 12],
  popoverTitle: ['form.part.product.title.page', 'form.part.product.list.page'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<ProductForm />, <List item={<ProductItem />} />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: <IntlMessages id="form.part.group.title.tab" />,
  noIcon: 'layout',
  span: [12, 12],
  popoverTitle: ['form.part.group.form.popover.title', 'form.part.group.list.popover.title'],
  popoverContent:  ['form.part.group.form.popover.content', 'form.part.group.list.popover.content'],
  pageTitle:  ['form.part.group.form.page', 'form.part.group.list.page'],
  content: [<GroupingForm />, <GroupingItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '2'
}, {
  title: <IntlMessages id="form.part.upload.title.tab" />,
  noIcon: 'calendar',
  span: [12, 12],
  popoverTitle: ['form.part.upload.title.popover.title', 'form.part.upload.list.popover.title'],
  popoverContent:  ['form.part.upload.title.popover.content', 'form.part.upload.list.popover.content'],
  pageTitle:  ['form.part.upload.title.page', 'form.part.upload.list.page'],
  content: [<UploadForm />, <UploadItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '3'
}, {
  title: <IntlMessages id="form.part.date.title.tab" />,
  noIcon: 'calendar',
  span: [12, 12],
  popoverTitle: ['form.part.date.title.popover.title', 'form.part.date.list.popover.title'],
  popoverContent:  ['form.part.date.title.popover.content', 'form.part.date.list.popover.content'],
  pageTitle:  ['form.part.date.title.page', 'form.part.date.list.page'],
  content: [<DateForm />, <DateItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: <IntlMessages id="form.part.time.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.time.title.popover.title', 'form.part.time.list.popover.title'],
  popoverContent:  ['form.part.time.form.popover.content', 'form.part.time.list.popover.content'],
  pageTitle:  ['form.part.time.title.page', 'form.part.time.list.page'],
  content: [<TimeForm />, <TimeItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '5'
}, {
  
  title: <IntlMessages id="form.part.age.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.age.title.popover.title', 'form.part.age.list.popover.title'],
  popoverContent:  ['form.part.age.form.popover.content', 'form.part.age.list.popover.content'],
  pageTitle:  ['form.part.age.title.page', 'form.part.age.list.page'],
  content: [<AgeForm />, <AgeItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '6'
},  {
  title: <IntlMessages id="form.part.class.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.class.title.popover.title', 'form.part.class.list.popover.title'],
  popoverContent:  ['form.part.class.form.popover.content', 'form.part.class.list.popover.content'],
  pageTitle:  ['form.part.class.title.page', 'form.part.class.list.page'],
  content: [<ClassForm />, <ClassItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '7'
}, {
  title: <IntlMessages id="form.part.lifespan.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.lifespan.title.popover.title', 'form.part.lifespan.list.popover.title'],
  popoverContent:  ['form.part.lifespan.form.popover.content', 'form.part.lifespan.list.popover.content'],
  pageTitle:  ['form.part.lifespan.title.page', 'form.part.lifespan.list.page'],
  content: [<LifespanForm />, <LifespanItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: <IntlMessages id="form.part.variations.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.variations.title.popover.title', 'form.part.variations.list.popover.title'],
  popoverContent:  ['form.part.variations.form.popover.content', 'form.part.variations.list.popover.content'],
  pageTitle:  ['form.part.variations.title.page', 'form.part.variations.list.page'],
  content: [<VariationsForm />, <VariationsItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '9'
}, {
  title: <IntlMessages id="form.part.wholesale.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.wholesale.title.popover.title', 'form.part.wholesale.list.popover.title'],
  popoverContent:  ['form.part.wholesale.form.popover.content', 'form.part.wholesale.list.popover.content'],
  pageTitle:  ['form.part.wholesale.title.page', 'form.part.wholesale.list.page'],
  content: [<WholesaleForm />, <WholesaleItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '10'
}, {
 
  title: <IntlMessages id="form.part.options.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.options.title.popover.title', 'form.part.options.list.popover.title'],
  popoverContent:  ['form.part.options.form.popover.content', 'form.part.options.list.popover.content'],
  pageTitle:  ['form.part.options.title.page', 'form.part.options.list.page'],
  content: [<OptionsForm />, <OptionsItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '11'
}, {
  title: <IntlMessages id="form.part.fees.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.fees.title.popover.title', 'form.part.fees.list.popover.title'],
  popoverContent:  ['form.part.fees.form.popover.content', 'form.part.fees.list.popover.content'],
  pageTitle:  ['form.part.fees.title.page', 'form.part.fees.list.page'],
  content: [<FeesForm />, <FeesItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '12'
}, {
  title: <IntlMessages id="form.part.size.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.size.title.popover.title', 'form.part.size.list.popover.title'],
  popoverContent:  ['form.part.size.form.popover.content', 'form.part.size.list.popover.content'],
  pageTitle:  ['form.part.size.title.page', 'form.part.size.list.page'],
  content: [<SizeForm />, <SizeItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '13'
}, {
  title: <IntlMessages id="form.part.discount.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.discount.title.popover.title', 'form.part.discount.list.popover.title'],
  popoverContent:  ['form.part.discount.form.popover.content', 'form.part.discount.list.popover.content'],
  pageTitle:  ['form.part.discount.title.page', 'form.part.discount.list.page'],
  content: [<DiscountForm />, <DiscountItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '14'
}, {
  title: <IntlMessages id="form.part.content.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.content.title.popover.title', 'form.part.content.list.popover.title'],
  popoverContent:  ['form.part.content.form.popover.content', 'form.part.content.list.popover.content'],
  pageTitle:  ['form.part.content.title.page', 'form.part.content.list.page'],
  content: [<ContentForm />, <ContentItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '15'
}, {
  title: <IntlMessages id="form.part.question.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.question.title.popover.title', 'form.part.question.list.popover.title'],
  popoverContent:  ['form.part.question.form.popover.content', 'form.part.question.list.popover.content'],
  pageTitle:  ['form.part.question.title.page', 'form.part.question.list.page'],
  content: [<QuestionForm />, <QuestionItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '16'
}, {
  title: <IntlMessages id="form.part.warranty.title.tab" />,
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.warranty.title.popover.title', 'form.part.warranty.list.popover.title'],
  popoverContent:  ['form.part.warranty.form.popover.content', 'form.part.varfeesiations.list.popover.content'],
  pageTitle:  ['form.part.warranty.title.page', 'form.part.warranty.list.page'],
  content: [<WarrantyForm />, <WarrantyItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '17'
}
];


class AddProducts extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
            <Row gutter={24} style={{ marginTop: '0px'}}>
              <Col span="24">
                <Tabs defaultActiveKey='18' size='small'>
                  {steps.map(item =><TabPane key={item.key} tab={<span>{item.title}</span>} >
                  <Page 
                      span={item.span}  
                      popoverTitle={item.popoverTitle}  
                      popoverContent={item.popoverContent}  
                      pageTitle={item.pageTitle}  
                      content={item.content}  
                    />
                  </TabPane> )}
                </Tabs>
              </Col>
             </Row>   
            </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default AddProducts;