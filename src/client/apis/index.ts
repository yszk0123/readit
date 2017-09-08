import axios from 'axios';

export async function fetch(uri: string) {
  const { data } = await axios.get(uri);

  return data;
}
