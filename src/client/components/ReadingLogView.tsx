import * as React from 'react';
import styled from 'styled-components';
import { ReadingStatus } from '../interfaces';

const Wrapper = styled.div`
  padding: 1rem;
  align-self: center;
  font-size: 1.6rem;
`;

interface Props {
  status: ReadingStatus;
}

export default function ReadingLogView({ status }: Props) {
  return <Wrapper>{status}</Wrapper>;
}
