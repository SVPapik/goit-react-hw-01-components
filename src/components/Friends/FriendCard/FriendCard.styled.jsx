import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid purple;
  box-shadow: rgba(196, 39, 198, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Name = styled.p`
  margin-left: 8px;
  font-weight: bold;
  /* text-decoration: ${props => (props.isOnline ? 'underline' : 'none')}; */
`;

export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#069c06' : 'tomato')};
`;
