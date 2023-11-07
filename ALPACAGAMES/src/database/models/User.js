module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at:dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(255),
            allowNull:false
        },
        last_name: {
            type: dataTypes.STRING(255),
            allowNull:false
        },
        display_name: {
            type: dataTypes.STRING(255),
            allowNull:false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        date_of_birth: {
            type: dataTypes.DATE,
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(255),
            allowNull:false
        },
        avatar: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        registration: {
            type: dataTypes.DATETIME,
            allowNull: false
        },

    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Review, {
            as: 'reviews',
            foreignKey: 'user_id'
        })
    }


    return User
}
