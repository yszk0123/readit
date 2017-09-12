import * as path from 'path';
import * as express from 'express';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
import * as passport from 'passport';
import { Strategy } from 'passport-local';
import serverConfig from './config/serverConfig';
import routes from './routes';
import { sequelize, User } from './models';

async function run() {
  const { appPort, secret } = serverConfig;
  await sequelize.sync();

  const rootDir = path.join(__dirname, '..', '..');
  const publicDir = path.join(rootDir, 'dist', 'public');

  passport.use(
    new Strategy(async (username, password, callback) => {
      try {
        const user = await User.findOne({ where: { email: username } });
        if (!user || user.password !== password) {
          callback(null, false);
          return;
        }
        callback(null, user);
      } catch (error) {
        callback(error);
      }
    }),
  );

  passport.serializeUser((user: any, callback) => callback(null, user.id));
  passport.deserializeUser(async (userId, callback) => {
    try {
      const user = await User.findById(userId);
      callback(null, user);
    } catch (error) {
      callback(error);
    }
  });

  const app = express();

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(morgan('combined'));
  app.use(favicon(path.join(publicDir, 'favicon.ico')));
  app.use(
    require('express-session')({
      secret,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routes);
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
