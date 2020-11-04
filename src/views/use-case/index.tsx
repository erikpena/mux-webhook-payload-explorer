import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom';

import menuConfig from './../../components/menu/menu-config';

const ContainerStyled = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
`;

const ReactMarkdownStyled = styled(ReactMarkdown)`
  flex-direction: column;

  & H1 {
    margin: 0;
  }
`;

interface ParamTypes {
  id: string
}

const renderers = { link: (props: any) => {
  const href = props.href;

  const label = props.children[0].props.value;

  return <a href={href} target='_blank' rel="noreferrer">{label}</a>;
} };

const UseCaseView = () => {
  const { id } = useParams<ParamTypes>();

  const mc = menuConfig[Number(id)];

  return <ContainerStyled>
    <ReactMarkdownStyled renderers={renderers}>{mc?.description || ''}</ReactMarkdownStyled>
  </ContainerStyled>
};

export default UseCaseView;
