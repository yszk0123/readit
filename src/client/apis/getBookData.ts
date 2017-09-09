import axios from 'axios';
import { Book } from '../interfaces';

export default async function getBookData(searchText: string): Promise<Book> {
  const uri = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    searchText,
  )}`;
  const { data } = await axios(uri);

  if (!data || !data.totalItems) {
    throw new Error('Not found');
  }

  const [item] = data.items;
  const { volumeInfo } = item;
  const { imageLinks } = volumeInfo;
  const isbn10 =
    volumeInfo.industryIdentifiers &&
    volumeInfo.industryIdentifiers.find((id: any) => id.type === 'ISBN_10');
  const isbn13 =
    volumeInfo.industryIdentifiers &&
    volumeInfo.industryIdentifiers.find((id: any) => id.type === 'ISBN_13');

  return {
    id: item.id,
    title: volumeInfo.title,
    subtitle: volumeInfo.subtitle,
    author: (volumeInfo.authors || []).join(', '),
    thumbnailLink: imageLinks.smallThumbnail || imageLinks.thumbnail || null,
    description:
      volumeInfo.description ||
      (item.searchInfo && item.searchInfo.textSnippet) ||
      null,

    category: (volumeInfo.categories || []).join(', '),
    pageCount: volumeInfo.pageCount,
    publisher: volumeInfo.publisher,
    publishedAt: volumeInfo.publishedDate,
    isbn:
      (isbn13 && isbn13.identifier) || (isbn10 && isbn10.identifier) || null,
    meta: {
      source: {
        type: 'https://www.googleapis.com/books/v1',
        link: item.selfLink,
        searchText: uri,
      },
    },
  };
}
