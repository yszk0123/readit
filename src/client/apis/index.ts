import axios from 'axios';

export async function fetch(uri: string, options?: any) {
  const { data } = await axios.get(uri, options);

  return data;
}

export async function patch(uri: string, data: any, options?: any) {
  const { data: result } = await axios.patch(uri, data, options);

  return result;
}
