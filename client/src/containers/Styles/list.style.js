import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius } from '../../config/style-util';
import WithDirection from '../../config/withDirection';

const formStyle = styled.div` 
  .collapsed {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  }
  .groupListImageWrapper {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100px;
  }
  .GroupListImage {
    width: 100%;
    height: 100px;
  }
  .grouplistInfoWrapper {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100px;
    color: #fff;
  }
  .GroupListOverlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100px;
    opacity: 0.4;
    background-color: #000;
    color: #fff;
  }
  
  .GroupListDetail {
    position: absolute;
    padding: 10px;
    z-index: 2;
    width: 100%;
    height: 100px;
    color: #fff;
  }
  .groupBasicDetail{
    position: static;
  }
  .groupAdvanceDetail{
    position: absolute;
    margin-top: 300px;
  }
  .whiteColor{
    color: #fff;
  }
  .discount {
    background: #ff0000;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
   
  }
  
  .dateTimeHolder{
   width: 100%;
   padding-left: 5px;
   padding-right: 5px;
   padding-top: 5px;
   padding-bottom: 5px;
   
  }

  .fullWidth {
    width: 100%;
  }

  .pointer {
    cursor: pointer;
  }
  
` 

export default WithDirection(formStyle);