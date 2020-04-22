import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: ${props => props.theme.tab.color};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.tab.fontFamily};
  font-size: 1em;
  font-weight: 600;
  padding: 12px 0;
  text-decoration: none;

  &.is-active {
    border-bottom: ${props => props.theme.tab._active.border};
    color: ${props => props.theme.tab._active.color};
  }

  &:hover {
    color: ${props => props.theme.tab._hover.color};
  }
`;
