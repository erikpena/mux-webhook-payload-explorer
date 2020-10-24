import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import menuConfig from './menu-config';

const ContainerStyled = styled.nav`
  background-color: #eee;
  overflow-y: scroll;
  padding: 1rem;

  @media (max-width: 767px) {
    max-height: 10rem;
    overflow-y: scroll;
  }
`;

const UlStyled = styled.ul`
  list-style-type:none;
  padding: 0;
  margin: 0;
`;

const LiHeaderStyled = styled.li`
  margin: 1.5rem auto 8px;
  font-size: inherit;
  text-transform: uppercase;
  color: #333;
  font-weight: 700;

  &:first-of-type {
    margin-top: 0;
  }
`;

const LiItemStyled = styled.li`
  color: #666;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
  line-height: 1.7rem;

  &:hover {
    color: #fb2491;
  }
`;

const BadgeStyled = styled.span`
  background-color: #666;
  color: #fff;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  margin-right: .5rem;
  flex-shrink: 0;
`;

const Menu = () => {
  const lis:any[] = [];
  
  let stepCounter = 1;

  for(let i = 0; i < menuConfig.length; i++) {
    const { type, file, id } = menuConfig[i];
    const Comp = type === 'header' ? LiHeaderStyled : LiItemStyled;
    const to = type === 'item' ? `/payload/${file}` : `/use-case/${id}`;
    const badge = type === 'item' ? <BadgeStyled>{stepCounter}</BadgeStyled> : null;

    lis.push(<Comp key={i}>
      {badge}
      <LinkStyled to={to}>{menuConfig[i].title}</LinkStyled>
    </Comp>);

    stepCounter = type === 'item' ? stepCounter+1 : 1;
  }

  return <ContainerStyled>
    <UlStyled>
      {lis}
    </UlStyled>
  </ContainerStyled>
};

export default Menu;
