import { useState } from 'react';
import styled, { css } from "styled-components";
import { Menu } from './Menu';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <>
      <h3 onClick={() => setOpenMenu(!openMenu)}>Menu</h3>
      <NavContainer openMenu={openMenu}>
        <h3>Contact</h3>
        <h1>Julien Mrl</h1>
      </NavContainer>
      {openMenu ? <Menu /> : ""}
    </>
  );
}


const NavContainer = styled.div`
  justify-content: space-between;
  margin: 10px 20px;
  align-items: center;
  h3 {
    font-size: 18px;
  }
  h1 {
    font-family: "Yeseva One", cursive;
    font-size: 32px;
  }
  display: ${(props) => (props.openMenu ? "none" : "flex")};
`;
