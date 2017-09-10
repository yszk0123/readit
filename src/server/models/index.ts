import * as path from 'path';
import * as Sequelize from 'sequelize';
import serverConfig from '../config/serverConfig';

const modelNames = ['User', 'Book', 'Review', 'ReadingLog'];

const sequelize = new Sequelize(serverConfig.databaseUrl, {
  dialect: 'postgres',
} as any);

const models: any = {};

modelNames.forEach(name => {
  models[name] = sequelize.import(
    name,
    require(path.join(__dirname, '..', name)),
  );
});

modelNames.forEach(name => {
  const { associate } = models[name];
  if (associate) {
    associate(models);
  }
});

const { User, Book, Review, ReadingLog } = models;
export { User, Book, Review, ReadingLog };
export { sequelize };
