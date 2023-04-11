import * as React from 'react'
import styled from 'styled-components'
export interface IAppProps {
  FirstSection: string
  FirstContent: string
}

export const CardProject = ({
  FirstSection,
  FirstContent,
}: IAppProps) => {
  return (
    <Box>
      <h1>{FirstSection}</h1>
      <p>{FirstContent}</p>
    </Box>
  )
}
const Box = styled.div`
  background-color: #4b7f52;
  display: flex;
  flex-direction: column;
  width: 233px;
  border: 1px solid #b6f9c9;
  height: fit-content;
  padding: 10px;
  gap: 10px;

  h1 {
    color: #8cd790;
    font-weight: 700;
    font-size: 22px;
  }
  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
`
