import * as path from 'path';
import * as express from 'express';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import { sequelize } from './models';

async function run() {
  const { appPort } = serverConfig;
  const app = express();
  await sequelize.sync();

  const rootDir = path.join(__dirname, '..', '..');
  const publicDir = path.join(rootDir, 'dist', 'public');

  app.use(morgan('combined'));
  app.use(favicon(
    path.join(publicDir, 'favicon.ico'),
  ) as express.RequestHandler);

  app.use(apiRouter);
  app.use(express.static(publicDir));

  app.listen(appPort, () => {
    console.log(`App is now running on http://localhost:${appPort}`);
  });
}

async function main() {
  try {
    await run();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
