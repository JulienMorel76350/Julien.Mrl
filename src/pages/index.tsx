import * as React from 'react'
import styled from 'styled-components'

const ScreenContainer = styled.div`
display: flex;
justify-content: center;
height: 100vh;
align-items: center;
`

const Title = styled.h3`
font-size:24px;
font-weight:700;
color:white;
`
export default function demo() {
  return (
    <ScreenContainer>
      <Title>Work in progress 🚧</Title>
    </ScreenContainer>
  )
}
