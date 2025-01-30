import styled from '@emotion/styled';
export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
export const Logo = styled.img`
  width: 110px;
  height: auto;
  margin-left: 4rem;
`
export const Nav = styled.nav`
  margin-left: 1rem;
  margin-top: 0.4rem;
`
export const NavItem = styled.a`
  color: #333;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.7rem;
  position: relative;
  text-decoration: none;
  &:hover {
    color: black;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    visibility: hidden;
  }
  &:hover::after {
    visibility: visible;
  }
`