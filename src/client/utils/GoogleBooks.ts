import { BookData } from '../interfaces';

export default function transformFromGoogleBookSearchResult(
  item: any,
): BookData {
  const { searchInfo, volumeInfo } = item;
  const { imageLinks } = volumeInfo;
  const isbn10 =
    volumeInfo.industryIdentifiers &&
    volumeInfo.industryIdentifiers.find((id: any) => id.type === 'ISBN_10');
  const isbn13 =
    volumeInfo.industryIdentifiers &&
    volumeInfo.industryIdentifiers.find((id: any) => id.type === 'ISBN_13');

  return {
    originalLink: item.selfLink,
    title: volumeInfo.title,
    subtitle: volumeInfo.subtitle,
    author: (volumeInfo.authors || []).join(', '),
    thumbnailLink:
      (imageLinks && (imageLinks.smallThumbnail || imageLinks.thumbnail)) ||
      null,
    description:
      volumeInfo.description || (searchInfo && searchInfo.textSnippet) || null,

    category: (volumeInfo.categories || []).join(', '),
    pageCount: volumeInfo.pageCount,
    publisher: volumeInfo.publisher,
    publishedAt: volumeInfo.publishedDate,
    isbn:
      (isbn13 && isbn13.identifier) || (isbn10 && isbn10.identifier) || null,
  };
}
