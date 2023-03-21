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
  flex-direction: column;
  flex: 1;
  background-color: #975f39;
  height: 100vh;
  overflow: hidden;
`
const Content = styled.div`
  flex: 1;
`
