import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

import Editor from '../../components/editor';
import menuConfig from './../../components/menu/menu-config';

const ContainerStyled = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
`;

interface ParamTypes {
  id: string
}

const PayloadView = () => {
  const { id } = useParams<ParamTypes>();

  const mc = menuConfig[Number(id)];

  const value = require(`./../../sample-sets/${mc.file}.json`);

  return <ContainerStyled>
    <Editor value={JSON.stringify(value, null, 2)} />
  </ContainerStyled>
}

export default PayloadView;
