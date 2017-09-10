import { Sequelize, DataTypes } from 'sequelize';
import { IModels } from '../interfaces';

export default function createBook(sequelize: Sequelize, DataTypes: DataTypes) {
  const Book = sequelize.define(
    'book',
    {
      originalLink: DataTypes.STRING,
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      author: DataTypes.STRING,
      thumbnailLink: DataTypes.STRING,
      description: DataTypes.TEXT,

      category: DataTypes.STRING,
      pageCount: DataTypes.INTEGER,
      publisher: DataTypes.STRING,
      publishedAt: DataTypes.DATEONLY,
      isbn: DataTypes.STRING,
    },
    {
      tableName: 'Book',
      timestamps: true,
    },
  );

  // FIXME
  const _Book = Book as any;
  _Book.associate = ({ User, Review }: IModels) => {
    _Book.Owner = Book.belongsTo(User, { as: 'owner' });
    _Book.Review = Book.belongsTo(Review);
  };

  return Book;
}
