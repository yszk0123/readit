import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { State } from '../interfaces';
import * as actions from '../actions';

const Wrapper = styled.div`
  padding: 20px;
  font-size: 1.6rem;
`;

interface Props {
  title: string;
  onTitleChange: React.ReactEventHandler<HTMLInputElement>;
  onCreate(title: string): void;
}

export function CreateReviewForm({ title, onTitleChange, onCreate }: Props) {
  return (
    <Wrapper>
      <input value={title} onChange={onTitleChange} />
      <button onClick={() => onCreate(title)}>Create</button>
    </Wrapper>
  );
}

export default connect(
  (state: State) => ({
    title: state.ui.titleInput,
  }),
  dispatch => ({
    onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const title = event.target.value;
      if (title) {
        dispatch(actions.searchBookByTitle(title));
      }
    },
    onCreate: (title: string) => {
      dispatch(actions.Review.create({ title }));
    },
  }),
)(CreateReviewForm);
