interface State {
  name: string;
}

export default function reducer(state: State = { name: 'world' }, action: any) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
}
