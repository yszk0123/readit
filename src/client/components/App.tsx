import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  name: string;
}

export function App({ name, onClick }: Props) {
  return <div onClick={onClick}>Hello, {name}!</div>;
}

export default connect(
  ({ name }) => ({ name }),
  dispatch => ({ onClick: () => dispatch({ type: 'HELLO' }) }),
)(App);
