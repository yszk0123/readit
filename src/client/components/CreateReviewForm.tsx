import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { State, BookData } from '../interfaces';
import * as actions from '../actions';
import LoadingIndicator from './LoadingIndicator';
import BookView from './BookView';
import Icon from './Icon';

const Wrapper = styled.div`
  padding: 20px;
  font-size: 1.6rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  cursor: pointer;
`;

interface Props {
  title: string;
  searching: boolean;
  candidates: BookData[];
  onTitleChange: React.ReactEventHandler<HTMLInputElement>;
  onCreate(bookData: BookData): void;
  onClearSearch(): void;
}

export function CreateReviewForm({
  title,
  candidates,
  searching,
  onTitleChange,
  onCreate,
  onClearSearch,
}: Props) {
  return (
    <Wrapper>
      <input value={title} onChange={onTitleChange} />
      {searching ? (
        <LoadingIndicator />
      ) : (
        <div>
          <Icon icon="times" onClick={onClearSearch} />
          <List>
            {candidates.map(book => (
              <ListItem key={book.id} onClick={() => onCreate(book)}>
                <BookView
                  title={book.title}
                  subtitle={book.subtitle}
                  author={book.author}
                  description={book.description}
                  isbn={book.isbn}
                  pageCount={book.pageCount}
                  thumbnailLink={book.thumbnailLink}
                />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </Wrapper>
  );
}

export default connect(
  (state: State) => ({
    title: state.ui.titleInput,
    candidates: state.ui.candidates,
    searching: state.ui.searching,
  }),
  dispatch => ({
    onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const title = event.target.value;
      if (title) {
        dispatch(actions.Search.searchBookByTitle(title));
      }
    },
    onCreate: (bookData: BookData) => {
      dispatch(actions.Review.create(bookData));
    },
    onClearSearch: () => {
      dispatch(actions.Search.clearSearch());
    },
  }),
)(CreateReviewForm);
