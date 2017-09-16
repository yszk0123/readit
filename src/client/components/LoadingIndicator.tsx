import * as React from 'react';
import styled from '../styles/StyledComponents';

const Center = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <Center>
      <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
      <span className="sr-only">Loading</span>
    </Center>
  );
}
