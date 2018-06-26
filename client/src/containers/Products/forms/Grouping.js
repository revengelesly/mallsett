import React, { Component } from 'react';
import GroupWrapper from '../../Styles/list.style';
import GroupOne from './formParts/group-part.1';
import GroupTwo from './formParts/group-part.2';
import GroupThree from './formParts/group-part.3';
import GroupFour from './formParts/group-part.4';
import GroupFive from './formParts/group-part.5';
import GroupSix from './formParts/group-part.6';
import GroupSeven from './formParts/group-part.7';
import GroupEight from './formParts/group-part.8';
import GroupNine from './formParts/group-part.9';
import GroupTen from './formParts/group-part.10';


import { 
  Row, 
  Col,
  Collapse,
  Button
} from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

export default class  extends Component {

  render() {
    return (
      <GroupWrapper>
        <Collapse  defaultActiveKey={['1', '10']} onChange={callback}>
          
          <Panel header="Detail Group" disabled	 key="1">
            <GroupOne />
          </Panel>
          <Panel  header="Variations Group" key="2">
            <GroupNine />
          </Panel>
          <Panel  header="Discount Group" key="3">
            <GroupFour />
          </Panel>
          <Panel header="Date and Time Group" key="4">
            <GroupTwo />
          </Panel>
          <Panel header="Age and Class Group" key="5">
            <GroupSix />
          </Panel>
          <Panel header="Association Group" key="6">
            <GroupThree />
          </Panel>
          <Panel header="Cross Marketing Group" key="7">
            <GroupEight />
          </Panel>
          <Panel header="Information Group" key="8">
            <GroupSeven />
          </Panel>
          <Panel  header="Questions and Comment Group" key="9">
            <GroupTen />
          </Panel>
          
          
          <Panel  header="Restriction Group" disabled	 key="10">
            <GroupFive />
          </Panel>
        </Collapse>
      </GroupWrapper>
    );
  }
}

