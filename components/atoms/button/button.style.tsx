import styled from 'styled-components';
import colors from '../../../styles/colors';

const BaseButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;

  > p {
    margin: 0 0.5rem;
  }
  &.button-primary {
    background-color: ${colors.blue_900};
    color: white;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export default BaseButton;
