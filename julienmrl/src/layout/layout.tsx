import styled from 'styled-components'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw
`
const Content = styled.div`
  height: 100vh;
  background-color: #F5EFE6;
  flex:1;
`
