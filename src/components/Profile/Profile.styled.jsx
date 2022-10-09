import styled from 'styled-components';

export const UserCard = styled.div`
  width: 260px;
  margin: 16px auto;
  background-color: #fff;
  box-shadow: rgba(106, 2, 125, 0.637) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`;

export const Avatar = styled.img`
  width: 130px;
  border-radius: 50%;
  border: 2px solid purple;
  /* overflow: hidden; */
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`;

export const Tag = styled.p`
  margin-top: 8px;
  color: purple;
`;

export const Location = styled.p`
  font-size: 20px;
  margin: 16px 0 0 0;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  background-color: #b58db1;
  color: #fff;
  border-radius: 0 0 8px 8px;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 80px;
  padding: 10px;
  border: 1px dotted purple;
  &:first-child {
    border-radius: 0 0 0 8px;
  }
  &:last-child {
    border-radius: 0 0 8px 0;
  }
`;

export const Label = styled.span`
  color: purple;
`;

export const Quantity = styled.span`
  font-weight: bold;
  margin-top: 8px;
`;
