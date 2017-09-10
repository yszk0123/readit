import { Sequelize, DataTypes } from 'sequelize';
import { IModels } from '../interfaces';

export default function createReview(
  sequelize: Sequelize,
  DataTypes: DataTypes,
) {
  const Review = sequelize.define(
    'review',
    {
      status: {
        type: DataTypes.ENUM(
          'PLAN_TO_BUY',
          'UNREAD',
          'READING',
          'READ',
          'STOP',
        ),
        allowNull: false,
        defaultValue: 'PLAN_TO_BUY',
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: 'Review',
      timestamps: true,
    },
  );

  // FIXME
  const _Review = Review as any;
  _Review.associate = ({ User, Book }: IModels) => {
    _Review.Owner = Review.belongsTo(User, { as: 'owner' });
    _Review.Book = Review.hasOne(Book);
  };

  return Review;
}
