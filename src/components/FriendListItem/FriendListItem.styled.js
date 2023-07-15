import { styled } from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 16px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Chip = styled.span`
width: 16px;
  height: 16px;

  border-radius: 100%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`

export { Item, Chip  };
