import styled from "styled-components";
import { motion } from "framer-motion";
import { Navbar } from '@/components/Navbar'
import Link from "next/link";
const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
`;
const MenuContainer = styled.div`
display: flex;
flex-direction:column;
margin-top:70px;
height:100%;
gap:10px;
a {
    text-decoration:none;
    color: #000000;
}
`
const MenuItemL = styled.div`
text-decoration: none;
display:flex;
font-size: 80px;
font-weight:700;
margin-left:120px;
`
const MenuItemR = styled.div`
display:flex;
text-decoration: none;
font-size: 80px;
font-weight:700;
margin-left:210px;
`
const ItemNumber = styled.p`
font-size:48px;
font-weight:400;
`
const MotionContainer = motion(Container)
const MotionMenuItemL = motion(MenuItemL)
const MotionMenuItemR = motion(MenuItemR)
const itemContainer = {
    hidden: { y: "100%" },
    show: {
        y: "0%",
        transition: {
            when: "beforeChildren",
            duration: 0.8,
        }
    },
}
const item = {
    hidden: { y: "50px", opacity: 0 },
    show: (custom) => ({
        y: "0px",
        opacity: 1,
        transition: { duration: 1, delay: custom, }
    }),
    hover: {
        backgroundColor: ['#FFFFFF', '#000000'],
        color: ['#000000', '#FFFFFF'],
    }
}
export default function Menu() {
    return (
        <MotionContainer
            variants={itemContainer}
            initial="hidden"
            animate="show"
        >
            <Navbar />
            <MenuContainer>
                <Link href={"/"}>
                    <MotionMenuItemL
                        variants={item}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        custom={1 * 0.5}
                    ><ItemNumber>01</ItemNumber>HOME</MotionMenuItemL>
                </Link>
                <Link href={"/"}>
                    <MotionMenuItemR
                        variants={item}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        custom={2 * 0.5}
                    ><ItemNumber>02</ItemNumber>A PROPOS</MotionMenuItemR>
                </Link>
                <Link href={"/"}>
                    <MotionMenuItemL
                        variants={item}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        custom={3 * 0.5}
                    ><ItemNumber>03</ItemNumber>MES PROJETS</MotionMenuItemL>
                </Link>
                <Link href={"/"}>
                    <MotionMenuItemR
                        variants={item}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        custom={4 * 0.5}
                    ><ItemNumber>04</ItemNumber>PRESTATION</MotionMenuItemR>
                </Link>
                <Link href={"/contact"}>
                    <MotionMenuItemL
                        variants={item}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        custom={5 * 0.5}
                    ><ItemNumber>05</ItemNumber>CONTACT</MotionMenuItemL>
                </Link>
            </MenuContainer>
        </MotionContainer>
    )
}


