import React, {useEffect} from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux'
// import {useStateValue} from "../../utils/hooks/useStateValue";
// import {getLocation} from "../../store/actions/gameAction";


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

const RoomInfo = styled.div`
display: flex;
flex-direction: column;
`

const ActionLog = () => {
//const [{gameState}, dispatch] = useStateValue();
const state = useSelector(state => state.player)

  //console.log("GAMESTATE: ", gameState, "DISPATCH: ", dispatch);
  // useEffect(()=> {
  //   getLocation(dispatch);
  // }, [dispatch]);

    return(
      <Container>
        <Title>Action Log Title</Title>
        <Log>
          <RoomInfo>
    <h3>{state.title}</h3>
    <p>{state.description}</p>
    </RoomInfo>
        </Log>
      </Container>
    )
  };



export default ActionLog;
