import React, { Component } from 'react';
import { 
  Row, 
  Col, 
  Tabs, 
} from 'antd';
import LayoutContentWrapper from '../../components//utility/layoutWrapper';
import LayoutContent from '../../components//utility/layoutContent';

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


const TabPane = Tabs.TabPane;


const steps = [
  {
  title: 'Manage Products',
  noIcon: 'plus-square-o',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<ProductForm />, <List item={<ProductItem />} />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: 'Product Grouping',
  noIcon: 'layout',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.  form.page', 'form.part.product.list.page'],
  content: [<GroupingForm />, <GroupingItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '2'
}, {
  title: 'Organized Uploads',
  noIcon: 'calendar',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<UploadForm />, <UploadItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '3'
}, {
  title: 'Date Range',
  noIcon: 'calendar',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<DateForm />, <DateItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: 'Time Range',
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<TimeForm />, <TimeItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '5'
}, {
  title: 'Variations',
  noIcon: 'calendar',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<VariationsForm />, <VariationsItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '6'
}, {
  title: 'Wholesale',
  noIcon: 'book',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<WholesaleForm />, <WholesaleItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '7'
}, {
  title: 'Lifespan',
  noIcon: 'environment-o',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<LifespanForm />, <LifespanItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: 'Age Range',
  noIcon: 'team',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<AgeForm />, <AgeItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '9'
},  {
  title: 'Class Range',
  noIcon: 'car',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<ClassForm />, <ClassItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '10'
}, {
  title: 'Add on Options',
  noIcon: 'clock-circle-o',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<OptionsForm />, <OptionsItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '11'
}, {
  title: 'Other Fees',
  noIcon: 'global',
  span: [12, 12],
  popoverTitle: ['form.part.product.form.popover.title', 'form.part.product.list.popover.title'],
  popoverContent:  ['form.part.product.form.popover.content', 'form.part.product.list.popover.content'],
  pageTitle:  ['form.part.product.form.page', 'form.part.product.list.page'],
  content: [<FeesForm />, <FeesItem />],
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '12'
}
];


class AddProducts extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
            <Row gutter={24} style={{ marginTop: '0px'}}>
              <Col span="24">
                <Tabs defaultActiveKey='3' size='small'>
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