import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: pink;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
`

export const Nav = styled.nav`
    margin-left: auto;
`

export const NavItem = styled.a`
    margin-left: 10px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #f00;
    }
`