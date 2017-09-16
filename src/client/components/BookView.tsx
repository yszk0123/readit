import * as React from 'react';
import styled from 'styled-components';

const PLACEHOLDER_URL = 'http://via.placeholder.com/128x128';

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

const Label = styled.label`
  padding: 4px 8px;
  font-size: 1.8rem;
`;
const Sublabel = styled.label`
  padding: 2px 8px;
  font-size: 1.2rem;
`;
const Description = styled.label`
  max-height: 180px;
  overflow-y: scroll;
  padding: 16px;
  font-size: 1.4rem;
  color: #444;
`;

const Subtitle = styled.label`
  padding: 2px 8px;
  font-size: 1.2rem;
  color: gray;
`;

interface Props {
  title?: string | null;
  subtitle?: string | null;
  author?: string | null;
  thumbnailLink?: string | null;
  description?: string | null;
  isbn?: string | null;
  pageCount?: number | null;
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
        <img alt="thumbnail" src={thumbnailLink || PLACEHOLDER_URL} />
      </Cover>
      <TextInfo>
        <Label>{title}</Label>
        <Subtitle>{subtitle}</Subtitle>
        <Sublabel>{author}</Sublabel>
        <Sublabel>
          ISBN: <span>{isbn || '(unknown)'}</span>
        </Sublabel>
        {pageCount && <Sublabel>{pageCount} pages</Sublabel>}
        <Description>{description}</Description>
      </TextInfo>
    </Wrapper>
  );
}
