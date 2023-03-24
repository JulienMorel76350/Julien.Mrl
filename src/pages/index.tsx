import { Navbar } from '@/components/Navbar'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 10px 20px;
  .lg_svg {display:none}
  @media only screen and (min-width: 530px) {
    .xs_svg {display:none}
    .lg_svg {display:flex}  
  }
  @media only screen and (min-width: 768px) {
    padding: 30px 20px 30px 30pxpx;
  }
`
const Title = styled.h1`
  font-size: 30px;
  color: #e8d5cc;
  text-align:center;
  position: relative;
  z-index: 1;
  font-weight: 700;
  @media only screen and (min-width: 768px) {
    font-size: 50px;
    text-align:left;
  }
  @media only screen and (min-width: 992px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 106.399px;
  }
  
`
const Bar = styled.div` 
  border: 1.06399px solid #ffffff;
  margin: 10px 0;
  @media only screen and (min-width: 768px) {
    width: calc(100% - 82px);
    margin: 30px 0;
  }
  @media only screen and (min-width: 1200px) {
    width: 800px;
  }
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
  font-size: 14px;
  color: #ffffff;
  @media only screen and (min-width: 530px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 25.5357px;
  }
`
const ContentTxt = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
 
  @media only screen and (min-width: 530px) {
    font-size: 18px;
    line-height: 34px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 25.5357px;
  }
`
const ImgContainer = styled.div`
  .imgS {
    display:flex;
  }
  .imgXL {
    display: none;
  }
  div {
    width:100%;
  }
  @media only screen and (min-width: 1200px) {
    right: -233px;
    top: 150px;
    .imgXL {
      display: flex;
    }
    .imgS {
      display:none;
    }
  }
  
`
const BoxContainer = styled.div`
  display:flex;
  
`

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrap>
        <Position>
          <Title>DEVELOPPEUR WEB</Title>
          <Bar></Bar>
          <BoxContainer>
            <Container>
              <div>
                <svg className='lg_svg' width="22" height="484" viewBox="0 0 22 484" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_162_325)">
                    <rect x="5" y="0.25" width="12" height="475" rx="6" fill="#E8D5CC"
                    />
                  </g>
                  <circle cx="11" cy="465.25" r="10" fill="white" />
                  <circle cx="10.6399" cy="10.8318" r="10.6399" fill="white" />
                  <circle cx="10.6399" cy="115.847" r="10.6399" fill="white" />
                  <circle cx="10.6399" cy="218.862" r="10.6399" fill="white" />
                  <circle cx="10.6399" cy="358.772" r="10.6399" fill="white" />
                  <defs>
                    <filter id="filter0_d_162_325" x="1" y="0.25" width="20" height="483" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_325"
                      />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_325" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <svg className='xs_svg' width="13" height="296" viewBox="0 0 13 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_162_325)">
                    <rect x="3.05457" y="0.0354614" width="7.3309" height="290.181" rx="3.66545" fill="#E8D5CC" />
                  </g>
                  <circle cx="6.72005" cy="284.108" r="6.10908" fill="white" />
                  <circle cx="6.49999" cy="6.49999" r="6.49999" fill="white" />
                  <circle cx="6.49999" cy="70.0455" r="6.49999" fill="white" />
                  <circle cx="6.49999" cy="132.23" r="6.49999" fill="white" />
                  <circle cx="6.49999" cy="198.9" r="6.49999" fill="white" />
                  <defs>
                    <filter id="filter0_d_162_325" x="0.610932" y="0.0354614" width="12.2182" height="295.069" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="2.44363" />
                      <feGaussianBlur stdDeviation="1.22182" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_325" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_325" result="shape" />
                    </filter>
                  </defs>
                </svg>

              </div>
              <Content>
                <div>
                  <ContentTitle>
                    Etudiant 2015 -2020 Bac S Science de l`ingénieur
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
              <div className='imgXL'><img src="WebDevXL.png" alt="" /></div>
              <div className='imgS'><img src="WebDevS.png" alt="" /></div>
            </ImgContainer>
          </BoxContainer>
        </Position>
      </Wrap>
    </>
  )
}
