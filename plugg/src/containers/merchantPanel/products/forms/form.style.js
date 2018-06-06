import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius } from '../../../../config/style-util';
import WithDirection from '../../../../config/withDirection';

const formStyle = styled.div` 
  .collapsed {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  }
`

export default WithDirection(formStyle);