import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px;
  background-color: #fff;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.img`
  width: 110px;
  height: auto;
  margin-left: 4rem;
`;

export const Nav = styled.nav`
  margin-left: 1rem;
  margin-top: 0.4rem;
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.a`
  color: #333;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.7rem;
  position: relative;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    color: black;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0.2rem;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;