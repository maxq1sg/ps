"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Post.init(
    {
      text: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
      createdAt:false,
      updatedAt: false,    
    }
  );
  return Post;
};
