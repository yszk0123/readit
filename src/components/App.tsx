import * as React from 'react';

interface Props {
  name: string;
}

export default function({ name }: Props) {
  return (
    <div>Hello, {name}!</div>
  )
}
