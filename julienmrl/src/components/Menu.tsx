import styled from "styled-components";
import { motion as m } from "framer-motion";

type MenuProps = {};
export const Menu = ({}: MenuProps) => {
  return (
    <Container>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75 }}
      >
        <h1>Menu</h1>
      </m.div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
