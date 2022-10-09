import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(106, 2, 125, 0.637) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:hover {
    transform: scale(1.1);
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Name = styled.p`
  font-weight: bold;
  /* text-decoration: ${props => (props.isOnline ? 'underline' : 'none')}; */
`;

export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#069c06' : 'tomato')};
`;
