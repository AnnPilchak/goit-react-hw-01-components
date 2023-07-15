import { styled } from "styled-components";

const Container = styled.section`
    min-width: 320px;
    max-width: 360px;
    padding: 32px 32px;
    margin-left: auto;
    margin-right: auto;
    
    display: flex;
    flex-direction: column;
    background-color: #EFF3F6;
`
const Title = styled.h2`
    color: black;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    margin: 0px;
`

const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`

const Item = styled.li`
    flex-basis: 20%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    color: white;
    background-color: ${getRandomHexColor};
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Label = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

const Percentage = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;


export { Container, Title, List, Item, Label, Percentage };