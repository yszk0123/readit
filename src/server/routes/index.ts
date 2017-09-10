import { Router as createRouter } from 'express';
import * as bodyParser from 'body-parser';
import users from './users';
import books from './books';
import reviews from './reviews';

const router = createRouter();

router.use((req, res, next) => {
  req.user = {};
  next();
});

router.use(bodyParser.json());

router.use('/users', users);
router.use('/books', books);
router.use('/reviews', reviews);

export default router;
