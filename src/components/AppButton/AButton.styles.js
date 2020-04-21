import styled from 'vue-styled-components';

export const Wrapper = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.button.color};
  flex-shrink: 0;
  color: ${props => props.theme.button.color};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.button.fontFamily};
  font-size: 1em;
  font-weight: 600;
  height: 36px;
  justify-content: center;
  line-height: 1.2em;
  outline: transparent solid 2px;
  padding: 0 5px;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &:disabled {
    pointer-events: none;
  }

  &:focus {
    color: ${props => props.theme.button._focus.color};
    box-shadow: 0 0 0 2px ${props => props.theme.button._focus.outlineColor};
  }

  &:hover {
    color: ${props => props.theme.button._hover.color};
  }

  &.is-primary {
    color: ${props => props.theme.button._primary.color};

    &:hover {
      color: ${props => props.theme.button._primary._hover.color};
    }

    &:focus {
      color: ${props => props.theme.button._primary._focus.color};
      box-shadow: 0 0 0 2px ${props => props.theme.button._primary._focus.outlineColor};
    }
  }
`;
