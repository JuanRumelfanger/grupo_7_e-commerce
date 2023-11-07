module.exports = (sequelize, DataTypes) => {
  let alias = 'UserRoles'
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
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }

  let config = {
    tableName: 'UserRoles',
    timestamps: false,
  }
  const UserRoles = sequelize.define(alias, cols, config)

  UserRoles.associate = (models) => {
    UserRoles.hasMany(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    }),
      UserRoles.hasMany(models.Role, {
        as: 'role',
        foreignKey: 'role_id',
      })
  }
  return UserRoles
}
