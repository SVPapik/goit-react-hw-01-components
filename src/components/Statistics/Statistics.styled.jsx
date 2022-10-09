import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatSection = styled.section`
  margin: 16px auto;
  background-color: #fff;
  width: 260px;
  box-shadow: rgba(106, 2, 125, 0.637) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const StatTitle = styled.h2`
  text-align: center;
  padding: 16px 0;
  color: purple;
  font-size: 16px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  /* flex-basis: calc(100% / (${props => (props.length >= 5 ? 5 : 4)})); */
  align-items: center;
  background-color: ${getRandomHexColor};
  border-radius: 4px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #fff;
  filter: drop-shadow(2px 2px 2px black);
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #fff;
  filter: drop-shadow(2px 2px 2px black);
`;
