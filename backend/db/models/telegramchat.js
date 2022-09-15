const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TelegramChat extends Model {
    static associate() {
    }
  }
  TelegramChat.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    chatId: {
      type: DataTypes.BIGINT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'TelegramChat',
    tableName: 'TelegramChats',
  });
  return TelegramChat;
};
