import { styled } from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center
`;

const TableHead = styled.thead`
color: white;
background-color: #00BCD5;
border: 1px solid #2a2a2a;
`

const TableBody = styled.tbody`
text-align: center;
background-color: #ECF1F4;
border: 1px solid #2a2a2a;
`
const TableHeader = styled.th`
padding: 10px;
`
const TableData = styled.td`
padding: 10px;
`

export { Box, TableHead, TableBody, TableHeader, TableData };