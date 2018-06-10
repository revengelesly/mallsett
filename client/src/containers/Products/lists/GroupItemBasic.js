import React, { Component } from 'react';
import GroupWrapper from './list.style';

export default class  extends Component {

  render() {
    return (
      <GroupWrapper>

      <div className="groupBasicDetail" >
        <div className="groupListImageWrapper">
          <img className="GroupListImage" src="http://bahaiteachings.org/wp-content/uploads/2013/05/Black-Woman.jpg" />
        </div>
        <div className="grouplistInfoWrapper" >
          <div className="GroupListOverlay">
          </div>
          <div className="GroupListDetail" >
            <h2 className="whiteColor ">Afro Make Up Section</h2>
            <h4 className="whiteColor "><span className="discount" >10% Off </span> Open in 1Hr 2Min 32 Sec </h4>
            <p className="whiteColor">Merchant Name - 111 East Flagler, Miami, FL</p>
          </div>
        </div>
      </div>
      
      </GroupWrapper>
    );
  }
}

