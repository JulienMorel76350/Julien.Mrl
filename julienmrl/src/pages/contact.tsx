import { Navbar } from '@/components/Navbar'
import { motion, useAnimationControls } from 'framer-motion'
import { useRef } from 'react'
import styled from "styled-components"
import { useState, useEffect } from 'react'

const BarContainer = styled.div`
display: flex;
width: 10vw;
height: 10vh;
background-color: red;
justify-content:right;
`
const BarItem = styled.a`
width:10px;
height: 10vh;
background-color:black;
border-radius: 30px;
`
const MotionBarContainer = motion(BarContainer)
const MotionBarItem = motion(BarItem)

export default function Contact() {
  const controls = useAnimationControls()
  const controls2 = useAnimationControls()
  const [barProgress, setBarProgress] = useState(0)
  const ref = useRef(0);
  const toggleBarProgress = () => {
    setBarProgress(barProgress + 1)
    const box = ref.current.getBoundingClientRect()
    box.width > 100 ? controls.start({
      backgroundColor: '#FFFFFF',
      scale: [1, 1.3],
      transition: { duration: 2, }
    }) : ""
    box.width > 200 ? controls2.start({
      backgroundColor: '#FFFFFF',
      scale: [1, 1.3],
      transition: { duration: 2, }
    }) : ""
    return console.log(barProgress)
  }
  const cotainer = {
    hidden: { width: "10px", opacity: 1 },
    show: (custom) => ({
      width: custom + "px",
      transition: { duration: 1, }
    }),
    hover: {
      backgroundColor: ['#FFFFFF', '#000000'],
      color: ['#000000', '#FFFFFF'],
    }
  }
  return (
    <>
      <Navbar />
      <div onClick={toggleBarProgress}>lol</div>
      <MotionBarContainer
        variants={cotainer}
        initial="hidden"
        animate="show"
        custom={50 + (10 * barProgress)}
        ref={ref}
      >
        <MotionBarItem
          animate={controls}
        ></MotionBarItem>
        <MotionBarItem
          animate={controls2}
        ></MotionBarItem>
      </MotionBarContainer>
    </>
  )
}
