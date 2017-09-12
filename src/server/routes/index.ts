import { Router as createRouter } from 'express';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import users from './users';
import books from './books';
import reviews from './reviews';

function guardIfUnauthorized(req: any, res: any, next: any) {
  if (req.user) {
    next();
    return;
  }
  res.sendStatus(401);
}

const apiRouter = createRouter();

apiRouter.use('/currentUser', (req, res) => {
  res.json(req.user);
});
apiRouter.use('/users', users);
apiRouter.use('/books', books);
apiRouter.use('/reviews', reviews);

const router = createRouter();

router.use(bodyParser.json());
router.use('/api', guardIfUnauthorized, apiRouter);

router.get('/login', (req, res) => {
  res.render('login');
});
router.post(
  '/login',
  bodyParser.urlencoded({ extended: true }),
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  },
);

export default router;
