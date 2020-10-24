import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  padding: 1rem;
  flex-direction: column;
`;

const H1Styled = styled.h1`
  font-weight: 400;
`;

const DefaultView = () => {
  return <ContainerStyled>
    <H1Styled>What is this?</H1Styled>
    <p>The Webhook Payload Explorer is a way to view example webhook payloads for uploads that would be sent from Mux to better understand the properties that will be available.</p>
    <p>The menu represents a grouping of webhook events based on the common <strong>use-case</strong>.  Each use-case section header briefly describes the use-case itself as well as some key points that should be considered for the events.  The set of events underneath the use-case header are numbered based on sequence for which they are sent out.</p>
  </ContainerStyled>
}

export default DefaultView;
