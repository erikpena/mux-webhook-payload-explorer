import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

import Editor from '../../components/editor';

const ContainerStyled = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
`;

interface ParamTypes {
  event: string
}

const PayloadView = () => {
  const { event } = useParams<ParamTypes>();

  const value = require(`./../../sample-sets/${event}.json`);

  return <ContainerStyled>
    <Editor value={JSON.stringify(value, null, 2)} />
  </ContainerStyled>
}

export default PayloadView;
