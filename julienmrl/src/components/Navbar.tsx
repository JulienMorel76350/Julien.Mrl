import { useState } from 'react'
import styled from 'styled-components'
import { motion as m} from "framer-motion";
import { Menu } from './Menu';
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
    console.log(openMenu)
  }
  let value = '0%';
  openMenu ? value = '100%' : value = '0%'
  
  return (
    <NavContainer>
      <h3>Contact</h3>
      <h1>Julien Mrl</h1>
      <h3 onClick={toggleMenu}>Menu</h3>
      <Container openMenu={openMenu}>
        <Menu />
      </Container>
    </NavContainer>
  )
}


const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:10px 20px;
  align-items: center;
  h3 {
    font-size: 18px;
  }
  h1 {
    font-family: 'Yeseva One', cursive;
    font-size: 32px;
  }
`
const Container = styled.div<{openMenu: boolean}>`
display:flex;
width:100vw;
height:100vh;
background-color: #fff
`