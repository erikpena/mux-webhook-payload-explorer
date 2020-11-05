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
    <p>These example payloads will reference ids (that don't actually exist).  Refer to the following table to get an idea of what id values to expect in the samples—</p>
    <dl>
      <dt><b>Asset Id</b></dt>
      <dd><code>fy3vqn7C02DKdtEAs8wFfXO01GX00Y666zrjiDNDU1PaiQ</code></dd>
      <dt><b>Playback Id</b></dt>
      <dd><code>bWPykzuurdv00Ry4jEJaPNhiek7666et2RoYg02IbOYBc</code></dd>
      <dt><b>Environment Id</b></dt>
      <dd><code>bg3p21</code></dd>
      <dt><b>Direct Upload Id</b></dt>
      <dd><code>MksbBSugGGHtHvP01YEiKl2sfs701xhBibUHrwRCJgSXo</code></dd>
    </dl>
  </ContainerStyled>
}

export default DefaultView;
