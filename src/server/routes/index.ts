import { readingLog } from './../../client/schema/index';
import { Router as createRouter } from 'express';
import * as bodyParser from 'body-parser';
import users from './users';
import books from './books';
import reviews from './reviews';
import readingLogs from './readingLogs';

const router = createRouter();

router.use(bodyParser.json());

router.use('/users', users);
router.use('/books', books);
router.use('/reviews', reviews);
router.use('/readingLogs', readingLogs);

export default router;
