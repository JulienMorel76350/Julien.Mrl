import React from 'react'
import styled from 'styled-components'
import { Navbar } from '@/components/Navbar'
import { CardProject } from '@/components/CardProject'
import { Svg } from "@/components/svg"
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 80vh;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b6f9c9;
  }
  gap: 50px;
`
const BG = styled.div`
  width: 100vw;
  display: flex;
  position: absolute;
  z-index: -10;
`

export default function Project() {
  return (
    <>
      <Navbar />
      <BG>
        <Svg></Svg>
      </BG>
      <Wrap>
        <ContentWrap>
          <CardProject
            FirstSection="Mes Parents et moi"
            FirstContent="Lorem ipsum dolor sitamet, consectetur adipiscing Nulla vel odio libero. Proin consectetur mattis neque sit met convallis. Suspendisse eget orci arcu. Sed condimentum orci non orci viverra, vitae aliquet tortor vulputate.
            Lorem ipsum dolor sitamet, consectetur adipiscing Nulla vel odio libero. Proin consectetur mattis neque sit met convallis. Suspendisse eget orci arcu. Sed condimentum orci non orci viverra, vitae aliquet tortor vulputate."
          ></CardProject>
          <CardProject
            FirstSection="Mes Parents et moi"
            FirstContent="Lorem ipsum dolor sitamet, consectetur adipiscing Nulla vel odio libero. Proin consectetur mattis neque sit met convallis. Suspendisse eget orci arcu. Sed condimentum orci non orci viverra, vitae aliquet tortor vulputate."
          ></CardProject>
          <CardProject
            FirstSection="Mes Parents et moi"
            FirstContent="Lorem ipsum dolor sitamet, consectetur adipiscing Nulla vel odio libero. Proin consectetur mattis neque sit met convallis. Suspendisse eget orci arcu. Sed condimentum orci non orci viverra, vitae aliquet tortor vulputate."
          ></CardProject>
          <CardProject
            FirstSection="Mes Parents et moi"
            FirstContent="Lorem ipsum dolor sitamet, consectetur adipiscing Nulla vel odio libero. Proin consectetur mattis neque sit met convallis. Suspendisse eget orci arcu. Sed condimentum orci non orci viverra, vitae aliquet tortor vulputate."
          ></CardProject>
        </ContentWrap>
        <ContentWrap>
          <CardProject
            FirstSection="Mes Parents et moi"
            FirstContent="Lorem ipsum dolor sitamet, consectetur adipiscing Nulla vel odio libero. Proin consectetur mattis neque sit met convallis. Suspendisse eget orci arcu. Sed condimentum orci non orci viverra, vitae aliquet tortor vulputate."
          ></CardProject>
        </ContentWrap>
      </Wrap>
    </>
  )
}
