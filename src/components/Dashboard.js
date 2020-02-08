import React from "react";
import Game from "../components/TheGame/Game"
import ActionLog from "./TheGame/ActionLog";
import styled from "styled-components";
import ChatBox from "./TheGame/ChatBox";
const Dashboard = () => {
    return (
      <Container>
        <Game/>
        {/* <TerminalStyles>
          <ActionLog/>
          <ChatBox/>
        </TerminalStyles> */}
      </Container>
      );

  };
  
  const Container = styled.div`
  height: 100%;
  width: 100%;
  `;

  const TerminalStyles = styled.div`
  display: flex;
  `;

  export default Dashboard;