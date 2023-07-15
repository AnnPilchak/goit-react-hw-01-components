import { styled } from "styled-components";

const Container = styled.section`
    min-width: 320px;
    max-width: 360px;
    padding: 32px 32px;
    margin-left: auto;
    margin-right: auto;
`
const TableHead = styled.section`
color: white;
background-color: #00BCD5;
padding: 10px;
  border: 1px solid #2a2a2a;
`

const TableBody = styled.section`
text-align: center;
background-color: #ECF1F4;
padding: 10px;
  border: 1px solid #2a2a2a;
`

export { Container, TableHead, TableBody };