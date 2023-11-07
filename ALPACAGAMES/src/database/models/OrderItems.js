module.exports = (sequelize, DataTypes) => {
  let alias = 'OrderItems'
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    video_game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
  let config = {
    tableName: 'OrderItems',
    timestamps: false,
  }
  const OrderItems = sequelize.define(alias, cols, config)

  OrderItems.associate = (models) => {
    OrderItems.hasMany(models.Order, {
      as: 'order',
      foreignKey: 'order_id',
    })
    OrderItems.hasMany(models.VideoGame, {
      as: 'video_game',
      foreignKey: 'video_game_id',
    })
  }

  return OrderItems
}
