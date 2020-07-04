import styled from 'vue-styled-components';

export const Wrapper = styled('div', {
  activeClass: String,
})`
  background-color: ${props => props.theme.menuItem.bgColor};
  border: none;
  border-bottom: ${props => props.theme.menuItem.borderBottom};
  border-left: ${props => props.theme.menuItem.borderLeft};
  color: ${props => props.theme.menuItem.color};
  flex-direction: column;
  font-family: ${props => props.theme.menuItem.fontFamily};
  font-size: ${props => props.theme.menuItem.fontSize};
  font-weight: ${props => props.theme.menuItem.fontWeight};
  display: flex;
  justify-content: center;
  line-height: ${props => props.theme.menuItem.lineHeight};
  min-height: 50px;
  text-decoration: none;
  width: 100%;

  .btn {
    height: 50px;
    justify-content: space-between;
    padding: 0 10px 0 26px;

    &.is-sub-menu-title {
      border-bottom: none;

      &:not(last-child) {
        border-bottom: none;
      }
    }

    &.is-sub-menu-item {
      padding: 0 10px 0 46px;

      &:not(last-child) {
        border-bottom: none;
      }
    }
  }

  &:hover {
    color: ${props => props.theme.menuItem._hover.color};
  }

  &.${props => props.activeClass} {
    border-left: ${props => props.theme.menuItem._active.borderLeft};
    color: ${props => props.theme.menuItem._active.color};
  }
`;

export const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

export const ContentLeft = styled.div`
  align-items: center;
  display: flex;
  margin: 0 10px 0 0;
`;
