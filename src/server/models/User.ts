import { Sequelize, DataTypes } from 'sequelize';
import { IModels } from '../interfaces';

export default function createUser(sequelize: Sequelize, DataTypes: DataTypes) {
  const User = sequelize.define(
    'user',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'User',
      timestamps: true,
    },
  );

  // FIXME
  const _User = User as any;
  _User.associate = ({ Book, Review }: IModels) => {
    _User.Books = User.hasMany(Book, { foreignKey: 'ownerId' });
    _User.Reviews = User.hasMany(Review, { foreignKey: 'ownerId' });
  };

  return User;
}
