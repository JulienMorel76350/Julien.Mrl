import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
  overflow: hidden;
`
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 92vh;
  gap: 10px;
  a {
    text-decoration: none;
    color: #000000;
  }
  
`
const MenuItemL = styled.div`
  text-decoration: none;
  display: flex;
  font-size: 12vw;
  font-weight: 700;
 
  @media only screen and (min-width: 530px) {

    .xs_svg {display:none}
    .lg_svg {display:flex}  
  }
  @media only screen and (min-width: 768px) {
    padding-left: 120px;
    font-size: 7vw;
  }
`
const MenuItemR = styled.div`
  display: flex;
  text-decoration: none;
  font-size: 12vw;
  font-weight: 700;
  
  @media only screen and (min-width: 530px) {
    .xs_svg {display:none}
    .lg_svg {display:flex}  
  }
  @media only screen and (min-width: 768px) {
    padding-left: 210px;
    font-size: 7vw;
  }
`
const ItemNumber = styled.p`
  font-size: 3vw;
  font-weight: 400;
`
const MotionContainer = motion(Container)
const MotionMenuItemL = motion(MenuItemL)
const MotionMenuItemR = motion(MenuItemR)
const itemContainer = {
  hidden: { y: '100%' },
  show: {
    y: '0%',
    transition: {
      when: 'beforeChildren',
      duration: 0.8,
    },
  },
}
const item = {
  hidden: { y: '50px', opacity: 0 },
  show: (custom: any) => ({
    y: '0px',
    opacity: 1,
    transition: { duration: 1, delay: custom },
  }),
  hover: {
    backgroundColor: ['#FFFFFF', '#000000'],
    color: ['#000000', '#FFFFFF'],
  },
}
export default function Menu() {
  return (
    <MotionContainer variants={itemContainer} initial="hidden" animate="show">
      <Navbar />
      <MenuContainer>
        <Link href={'/'}>
          <MotionMenuItemL
            variants={item}
            initial="hidden"
            animate="show"
            whileHover="hover"
            custom={1 * 0.25}
          >
            <ItemNumber>01</ItemNumber>HOME
          </MotionMenuItemL>
        </Link>
        <Link href={'/'}>
          <MotionMenuItemR
            variants={item}
            initial="hidden"
            animate="show"
            whileHover="hover"
            custom={2 * 0.25}
          >
            <ItemNumber>02</ItemNumber>A PROPOS
          </MotionMenuItemR>
        </Link>
        <Link href={'/project'}>
          <MotionMenuItemL
            variants={item}
            initial="hidden"
            animate="show"
            whileHover="hover"
            custom={3 * 0.25}
          >
            <ItemNumber>03</ItemNumber>MES PROJETS
          </MotionMenuItemL>
        </Link>
        <Link href={'/'}>
          <MotionMenuItemR
            variants={item}
            initial="hidden"
            animate="show"
            whileHover="hover"
            custom={4 * 0.25}
          >
            <ItemNumber>04</ItemNumber>PRESTATION
          </MotionMenuItemR>
        </Link>
        <Link href={'/contact'}>
          <MotionMenuItemL
            variants={item}
            initial="hidden"
            animate="show"
            whileHover="hover"
            custom={5 * 0.25}
          >
            <ItemNumber>05</ItemNumber>CONTACT
          </MotionMenuItemL>
        </Link>
      </MenuContainer>
    </MotionContainer>
  )
}
