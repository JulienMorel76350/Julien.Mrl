import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 30px 60px;
   
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 106.399px;
  color: #e8d5cc;
  position:relative;
  z-index:1;
`
const Bar = styled.div`
  width: 800px;
  border: 1.06399px solid #ffffff;
  margin: 30px 0;
`
const Container = styled.div`
  display: flex;
`
const Position = styled.div`
  position: relative;
  width: fit-content;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  max-width: 750px;
  gap: 30px;
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`
const ContentTitle = styled.h3`
  font-weight: 700;
  font-size: 25.5357px;
  color: #ffffff;
`
const ContentTxt = styled.p`
  font-weight: 400;
  font-size: 25.5357px;
  color: #ffffff;
  line-height: 34px;
`
const ImgContainer = styled.div`
  position: absolute;
  right: -233px;
  top: -15px;
  div {
    background-color: black;
    width: 487.31px;
    height: 688.4px;
  }
`

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrap>
        <Position>
          <Title>DEVELOPPEUR WEB</Title>
          <Bar></Bar>
          <Container>
            <div>
              <svg
                width="22"
                height="484"
                viewBox="0 0 22 484"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_162_325)">
                  <rect
                    x="5"
                    y="0.25"
                    width="12"
                    height="475"
                    rx="6"
                    fill="#E8D5CC"
                  />
                </g>
                <circle cx="11" cy="465.25" r="10" fill="white" />
                <circle cx="10.6399" cy="10.8318" r="10.6399" fill="white" />
                <circle cx="10.6399" cy="115.847" r="10.6399" fill="white" />
                <circle cx="10.6399" cy="218.862" r="10.6399" fill="white" />
                <circle cx="10.6399" cy="358.772" r="10.6399" fill="white" />
                <defs>
                  <filter
                    id="filter0_d_162_325"
                    x="1"
                    y="0.25"
                    width="20"
                    height="483"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_162_325"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_162_325"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <Content>
              <div>
                <ContentTitle>
                  Etudiant 2015 -2020 Bac S Science de l'ingénieur
                </ContentTitle>
                <ContentTxt>
                  Compétence acquise : html - Css - Js - sql - php
                </ContentTxt>
              </div>
              <div>
                <ContentTitle>
                  Etudiant 2020 - 2023 Developpeur Web
                </ContentTitle>
                <ContentTxt>
                  Compétence acquise: symfony - react - Ionic
                </ContentTxt>
              </div>
              <div>
                <ContentTitle>
                  Alternance 2021 - 2022 Chez Courses et moi
                </ContentTitle>
                <ContentTxt>
                  Entretien du site web, refonte design Figma, Intégration
                  Wordpress.
                </ContentTxt>
              </div>
              <div>
                <ContentTitle>
                  Alternance 2022 - 2023 Chez Mes Parents et Moi
                </ContentTitle>
                <ContentTxt>
                  Création du site web & design. Wordpress & Figma
                </ContentTxt>
              </div>
              <div>
                <ContentTitle>Recherche alternance 2023 - 2025 </ContentTitle>
              </div>
            </Content>
          </Container>
          <ImgContainer>
            <div></div>
          </ImgContainer>
        </Position>
      </Wrap>
    </>
  );
}
