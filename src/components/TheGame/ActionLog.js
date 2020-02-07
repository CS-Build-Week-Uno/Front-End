import React, {useEffect} from "react";
import styled from "styled-components";
import {useStateValue} from "../../utils/hooks/useStateValue";
import {getLocation} from "../../store/actions/gameAction";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 45%;
height: 10rem;
border: 5px solid black;
padding: 20px;
color: blue;

`;
export const Title = styled.div`

width: 90%;
height: .5rem;
border: 1px solid black;
padding: 10px;
color: blue;


`;
export const Log = styled.div`
display: flex;
width: 90%;
height: 9rem;
border: 1px solid black;
padding: 10px;
color: blue;
`;



const ActionLog = () => {
const [{gameState}, dispatch] = useStateValue();


useEffect(()=> {
  getLocation(dispatch);
}, [dispatch]);

  return(
    <Container>
      <Title>Action Log Title</Title>
      <Log>Hello</Log>
    </Container>
  )
};



export default ActionLog;
