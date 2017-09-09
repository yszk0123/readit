import { Router as createRouter } from 'express';
import * as bodyParser from 'body-parser';
import { Book } from '../models';

const router = createRouter();

router.get('/:bookId', async (req, res, next) => {
  const book = await Book.findById(req.params.bookId, {
    where: { ownerId: req.user.id },
  });
  if (!book) {
    res.send(404);
    return;
  }

  res.json(book);
});

router.post('/', async (req, res, next) => {
  const book = await Book.create(req.body);

  res.json(book);
});

router.patch('/:bookId', async (req, res, next) => {
  const book = await Book.findById(req.params.bookId, {
    where: { ownerId: req.user.id },
  });
  if (!book) {
    res.send(404);
    return;
  }

  await book.update(req.body);
  res.json(book);
});

router.delete('/:bookId', async (req, res, next) => {
  const book = await Book.findById(req.params.bookId, {
    where: { ownerId: req.user.id },
  });
  if (!book) {
    res.send(404);
    return;
  }

  await book.destroy();
  res.json();
});

export default router;
