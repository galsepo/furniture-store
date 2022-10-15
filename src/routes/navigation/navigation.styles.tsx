import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  @media screen and (max-width: 800px) {
  height: 60px; 
  padding: 10px;

 
  }
`;

export const LogoContainer = styled(Link)`
display: flex;
align-items: center;
justify-content: flex-center;

  @media screen and (max-width: 800px) {
      padding: 0;
      width: 100%;
     }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
     }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
