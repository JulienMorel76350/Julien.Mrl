import * as React from 'react'
import styled from 'styled-components'
export interface IAppProps {
  FirstSection: string
  FirstContent: string
  SecondeSection: string
  SecondeContent: string
  Padding: any
  id: any
}

export const Card = ({
  FirstSection,
  FirstContent,
  SecondeSection,
  SecondeContent,
  Padding,
  id,
}: IAppProps) => {
  return (
    <Box value={Padding}>
      <h2>{id}</h2>
      <h1>{FirstSection}</h1>
      <p>{FirstContent}</p>
      <h1>{SecondeSection}</h1>
      <p>{SecondeContent}</p>
    </Box>
  )
}
const Box = styled.div<{ value: string }>`
  display: flex;
  flex-direction: column;
  background: #4b7f52;
  border: 2px solid #baf2bb;
  border-radius: 10px;
  min-width: 520px;
  width: 530px;
  padding: 10px 20px;
  gap: 5px;
  margin-top: 2%;
  margin-left: ${(props) => props.value};
  position: relative;
  h1 {
    color: #baf2bb;
    font-weight: 700;
    font-size: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
  }
  h2 {
    left: -40px;
    position: absolute;
    top: 3px;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
  }
  @media only screen and (min-width: 1280px) {
    width: 600px;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 24px;
    }
  }
`
