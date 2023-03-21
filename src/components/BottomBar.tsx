import styled from "styled-components";
import { motion } from 'framer-motion'
const BottomBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  height: 40px;
  align-items: center;
  border: 1px solid #C49D83;
  cursor:pointer;
`;

const BottomBarTitle = styled.h1`
  font-size: 24px;
`


export const BottomBar = () => {

    const MotionContainer = motion(BottomBarContainer)
    
    return (
        <MotionContainer>
            <BottomBarTitle>TOUT MES PROJETS</BottomBarTitle>
        </MotionContainer>
    );
}

