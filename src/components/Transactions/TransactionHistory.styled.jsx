import styled from 'styled-components';

export const Table = styled.table`
  margin: 16px auto;
  width: 260px;
  border: 2px solid purple;
`;

export const Header = styled.thead`
  text-transform: uppercase;
  color: #fff;
  background-color: purple;
`;

export const Row = styled.tr`
  text-align: center;
  &:nth-child(even) {
    background: #b58db1;
  }
  &:nth-child(odd) {
    background: #fff;
  }
`;

export const FirstColumn = styled.td`
  text-align: start;
`;
