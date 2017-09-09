import * as React from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import styled from 'styled-components';
import { ActionTypes, State, User, Book, ReadingLog } from '../interfaces';
import { selectCurrentUser, selectReadingLog } from '../selectors';
import ReadingStatusView from './ReadingLogView';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  font-size: 1.6rem;
`;

const Cover = styled.div`
  padding: 1rem;
  width: 128px;
  height: 128px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Label = styled.label``;

interface Props {
  title: string;
  subtitle: string | null;
  author: string;
  thumbnailLink: string;
  description: string;
  isbn: string | null;
  pageCount: number;
}

export default function BookView({
  title,
  subtitle,
  author,
  description,
  isbn,
  pageCount,
  thumbnailLink,
}: Props) {
  return (
    <Wrapper>
      <Cover>
        <img alt="thumbnail" src={thumbnailLink} />
      </Cover>
      <TextInfo>
        <Label>Title: {title}</Label>
        <Label>Subtitle: {subtitle}</Label>
        <Label>
          Author: <span>{author}</span>
        </Label>
        <Label>
          Description: <span>{description}</span>
        </Label>
        <Label>
          ISBN: <span>{isbn || '(unknown)'}</span>
        </Label>
        <Label>
          PageCount: <span>{pageCount}</span>
        </Label>
      </TextInfo>
    </Wrapper>
  );
}
