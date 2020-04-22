import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  position: absolute;
  width: 100%;
`;

export const Message = styled.h3`
  color: ${props => props.theme.messagePanel.color};
  font-family: ${props => props.theme.messagePanel.fontFamily};
  font-size: 1.2em;
  font-weight: 600;
  line-height: 1.2em;
  margin: 0 0 10px;
`;
