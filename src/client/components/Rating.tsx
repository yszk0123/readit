import * as React from 'react';
import styled from '../styles/StyledComponents';
import { ReviewRating } from '../interfaces';
import Icon from './Icon';

const Wrapper = styled.div`
  display: flex;
  padding: 4px;
`;

const RATINGS: ReviewRating[] = [1, 2, 3, 4, 5];

interface Props {
  rating: ReviewRating;
  onClick(rating: ReviewRating): void;
  onReset: React.ReactEventHandler<HTMLElement>;
}

export default function Rating({ rating, onClick, onReset }: Props) {
  return (
    <Wrapper>
      <Icon icon="times" onClick={onReset} />
      {RATINGS.map(r => (
        <Icon
          key={r}
          icon={r <= rating ? 'star' : 'star-o'}
          onClick={() => onClick(r)}
        />
      ))}
    </Wrapper>
  );
}
