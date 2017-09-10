import { Router as createRouter } from 'express';
import { Review } from '../models';

const router = createRouter();

router.get('/', async (req, res, next) => {
  const reviews = await Review.findAll({ where: { ownerId: req.user.id } });

  res.json(reviews);
});

router.get('/:reviewId', async (req, res, next) => {
  const review = await Review.findById(req.params.reviewId, {
    where: { ownerId: req.user.id },
  });
  if (!review) {
    res.send(404);
    return;
  }

  res.json(review);
});

router.post('/', async (req, res, next) => {
  const review = await Review.create(req.body);

  res.json(review);
});

router.patch('/:reviewId', async (req, res, next) => {
  const review = await Review.findById(req.params.reviewId, {
    where: { ownerId: req.user.id },
  });
  if (!review) {
    res.send(404);
    return;
  }

  await review.update(req.body);
  res.json(review);
});

router.delete('/:reviewId', async (req, res, next) => {
  const review = await Review.findById(req.params.reviewId, {
    where: { ownerId: req.user.id },
  });
  if (!review) {
    res.send(404);
    return;
  }

  await review.destroy();
  res.json();
});

export default router;
