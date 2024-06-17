import { createGlobalStyle } from 'styled-components';
import { MIN_MOBILE_WIDTH_PX } from '../utils/constants';
import colors from './colors';

const Typography = createGlobalStyle`
  .headline-small{
    font-family: Fira Sans, sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    text-align: center;
    color:  ${colors.blue_900};
  }

  .body-medium {
    font-family: Fira Sans, sans-serif;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: normal;
    color:  ${colors.blue_900};
  }

  .label-large{
    font-family: Fira Sans, sans-serif;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color:  ${colors.white};
  }

  @media only screen and (max-width: ${MIN_MOBILE_WIDTH_PX}px) {

  }
`;

export default Typography;
