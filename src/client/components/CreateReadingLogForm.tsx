import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ID, ActionTypes, State, User, ReadingLog } from '../interfaces';
import { createReadingLog, searchBookByTitle } from '../actions';

const Wrapper = styled.div`
  padding: 20px;
  font-size: 1.6rem;
`;

interface Props {
  title: string;
  onTitleChange: React.ReactEventHandler<HTMLInputElement>;
  onCreateReadingLog(title: string): void;
}

export function CreateReadingLogForm({
  title,
  onTitleChange,
  onCreateReadingLog,
}: Props) {
  return (
    <Wrapper>
      <input value={title} onChange={onTitleChange} />
      <button onClick={() => onCreateReadingLog(title)}>Create</button>
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
        dispatch(searchBookByTitle(title));
      }
    },
    onCreateReadingLog: (title: string) => {
      dispatch(createReadingLog({ title }));
    },
  }),
)(CreateReadingLogForm);
