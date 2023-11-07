module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'WishList';
    let cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        videoGameId:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        addedAt:{
            type:DataTypes.DATE,
            allowNull: false,
        }
    }
    let config = {
        tableName:'WishList',
        timestamps: true
    }

    const WishList = sequelize.define(alias, cols, config);
    
    return WishList;
}