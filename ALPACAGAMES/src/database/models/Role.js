module.exports = (sequelize, DataTypes) => {
  let alias = 'Role'
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }

  let config = {
    tableName: 'Role',
    timestamps: false,
  }
  const Role = sequelize.define(alias, cols, config)

  return Role
}
