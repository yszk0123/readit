import { Router as createRouter } from 'express';
import * as bodyParser from 'body-parser';
import { User } from '../models';

const router = createRouter();

router.get('/:userId', async (req, res, next) => {
  const user = await User.findById(req.params.userId, {
    where: { ownerId: req.user.id },
  });
  if (!user) {
    res.send(404);
    return;
  }

  res.json(user);
});

router.post('/', async (req, res, next) => {
  const user = await User.create(req.body);

  res.json(user);
});

router.patch('/:userId', async (req, res, next) => {
  const user = await User.findById(req.params.userId, {
    where: { ownerId: req.user.id },
  });
  if (!user) {
    res.send(404);
    return;
  }

  await user.update(req.body);
  res.json(user);
});

router.delete('/:userId', async (req, res, next) => {
  const user = await User.findById(req.params.userId, {
    where: { ownerId: req.user.id },
  });
  if (!user) {
    res.send(404);
    return;
  }

  await user.destroy();
  res.json();
});

export default router;
