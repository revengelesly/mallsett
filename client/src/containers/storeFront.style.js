import styled from 'styled-components';
import { palette } from 'styled-theme';
// import bgImage from '../../image/sign.jpg';
import WithDirection from '../config/withDirection';

const MenuWrapper = styled.div `
color: #fff;
  .white {
     color: #fff;
  }
  img {
    max-width: 30px;
  }
  `;
export default WithDirection(MenuWrapper);
