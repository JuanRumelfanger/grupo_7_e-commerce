module.exports = (sequelize, DataTypes)=>{
    let alias = 'Review';
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primarykey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }

    }
    

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };


    const Review = sequelize.define(alias,cols,config);

    Review.associate = function(models) {
        Review.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
    }
}