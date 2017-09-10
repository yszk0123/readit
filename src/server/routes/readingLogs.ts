import { Router as createRouter } from 'express';
import { ReadingLog } from '../models';

const router = createRouter();

router.get('/:readingLogId', async (req, res, next) => {
  const readingLog = await ReadingLog.findById(req.params.readingLogId, {
    where: { ownerId: req.user.id },
  });
  if (!readingLog) {
    res.send(404);
    return;
  }

  res.json(readingLog);
});

router.post('/', async (req, res, next) => {
  const readingLog = await ReadingLog.create(req.body);

  res.json(readingLog);
});

router.patch('/:readingLogId', async (req, res, next) => {
  const readingLog = await ReadingLog.findById(req.params.readingLogId, {
    where: { ownerId: req.user.id },
  });
  if (!readingLog) {
    res.send(404);
    return;
  }

  await readingLog.update(req.body);
  res.json(readingLog);
});

router.delete('/:readingLogId', async (req, res, next) => {
  const readingLog = await ReadingLog.findById(req.params.readingLogId, {
    where: { ownerId: req.user.id },
  });
  if (!readingLog) {
    res.send(404);
    return;
  }

  await readingLog.destroy();
  res.json();
});

export default router;
