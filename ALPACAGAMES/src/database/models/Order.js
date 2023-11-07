module.exports = (sequelize, DataTypes) => {
  let alias = 'Order'
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }

  let config = {
    tableName: 'Order',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
  const Order = sequelize.define(alias, cols, config)

  Order.associate = (models) => {
    Order.hasMany(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    })
  }
  return Order
}
