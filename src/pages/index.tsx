import * as React from 'react'
import styled from 'styled-components'
import { Navbar } from '@components/Navbar'
import { Card } from '@components/Card'
export interface IAppProps {}
const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4b7f52;
  position: relative;
  width: 100%;
  position: 0;
  height: 100vh;
  .TopRight {
    position: absolute;
    right: 0;
    position: -1;
  }
  .BotLeft {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media only screen and (max-width: 1280px) {
    .TopRight > svg {
      width: 463px;
      height: 439px;
    }
    .BotLeft > svg {
      width: 685px;
      height: 462px;
    }
  }
  @media only screen and (min-width: 1450px) {
    .TopRight > svg {
      width: 663px;
      height: 639px;
    }
    .BotLeft > svg {
      width: 885px;
      height: 662px;
    }
  }
`
export default function demo(props: IAppProps) {
  return (
    <ScreenContainer>
      <Navbar />
      <div className="TopRight">
        <svg
          width="563"
          height="539"
          viewBox="0 0 563 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M885.42 536.307C790.378 492.586 695.343 448.703 583.339 421.703C471.554 394.707 343.019 384.596 265.949 332.863C188.879 281.13 163.487 187.939 131.464 103.307C99.4403 18.674 61.0041 -57.3964 22.5679 -133.467L907.988 -115.92L885.42 536.307Z"
            fill="#8CD790"
          />
          <path
            d="M798.71 269.887C751.189 248.026 703.668 226.165 647.776 212.667C591.883 199.169 527.4 194.029 488.974 168.165C450.33 142.296 437.743 95.703 421.732 53.3867C405.72 11.0703 386.502 -26.9648 367.284 -65L809.994 -56.2267L798.71 269.887Z"
            fill="#BAF2BB"
          />
        </svg>
      </div>
      <Card
        FirstSection="Students 2015 -2020"
        FirstContent=" Bac S Science de l`ingénieur
 Informatique et sciences du numérique"
        SecondeSection="Compétence"
        SecondeContent=" HTML - CSS - SQL - PHP"
        Padding="5%"
        id="01"
      ></Card>
      <Card
        FirstSection="Students 2020 - 2023"
        FirstContent=" Developpeur Web FULL STACK"
        SecondeSection="Compétence"
        SecondeContent=" SYMFONY  - IONIC - VUE - NEXTJS - NUXT"
        Padding="15%"
        id="02"
      ></Card>
      <Card
        FirstSection="Alternance Courses et moi 2021 - 2022 "
        FirstContent=" Refonte design Figma - Intégration Wordpress."
        SecondeSection="Compétence"
        SecondeContent=" HTML - CSS - JS - SQL - PHP"
        Padding="38%"
        id="03"
      ></Card>
      <Card
        FirstSection="Alternance Mes Parents et Moi 2022 - 2023"
        FirstContent=" Création du site web - design Wordpress - Figma"
        SecondeSection="Compétence"
        SecondeContent=" HTML - CSS - JS - SQL - PHP"
        Padding="50%"
        id="04"
      ></Card>
      <div className="BotLeft">
        <svg
          width="785"
          height="562"
          viewBox="0 0 785 562"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-41.9925 16C32.1864 80.1054 106.305 144.368 202.212 195.703C297.917 246.986 415.207 285.288 469.724 353.343C524.241 421.398 515.841 518.996 516.635 609.606C517.429 700.216 527.214 783.786 537 867.356L-289 654.945L-41.9925 16Z"
            fill="#8CD790"
          />
          <path
            d="M-52.7291 293.165C-15.6396 325.217 21.4499 357.27 69.302 382.911C117.154 408.553 175.973 427.835 203.129 461.836C230.489 495.89 226.187 544.663 226.585 589.968C226.982 635.273 231.874 677.058 236.767 718.843L-176.233 612.637L-52.7291 293.165Z"
            fill="#BAF2BB"
          />
        </svg>
      </div>
    </ScreenContainer>
  )
}
