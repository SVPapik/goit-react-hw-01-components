import styled from 'styled-components';

export const Table = styled.table`
  margin: 16px auto;
  width: 260px;
  border: 2px solid purple;
  border-radius: 8px;
  background-color: purple;
`;

export const Header = styled.thead`
  text-transform: uppercase;
  color: #fff;
  background-color: purple;
`;

export const Row = styled.tr`
  text-align: center;
  border-radius: 10px;
  &:nth-child(even) {
    background: #b58db1;
  }
  &:nth-child(odd) {
    background: #fff;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const FirstColumn = styled.td`
  text-align: start;
`;
