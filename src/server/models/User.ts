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
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      tableName: 'User',
      timestamps: true,
    },
  );

  // FIXME
  const _User = User as any;
  _User.associate = ({ ReadingLog }: IModels) => {
    _User.ReadingLogs = User.hasMany(ReadingLog, { foreignKey: 'ownerId' });
  };

  return User;
}
