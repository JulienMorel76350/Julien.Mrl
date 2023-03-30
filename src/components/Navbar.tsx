import styled from 'styled-components'
import Link from 'next/link'
export const Navbar = () => {
  return (
    <NavContainer>
      <Link className="link" href={'/menu'}>
        Menu
      </Link>
      <Title>
        <Link href={'/'}>Julien Mrl</Link>
      </Title>
      <Link className="link" href={'/contact'}>
        Contact
      </Link>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  align-items: center;
  .link {
    font-size: 18px;
    text-decoration: none;
    color: #FFFFFF;
  }
`
const Title = styled.h1`
  font-family: 'Yeseva One', cursive;
  font-size: 32px;
  a {
    text-decoration: none;
    color: #b6f9c9;
  }
`
