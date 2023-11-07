module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'WishListItems';
    let cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        wishListsId:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        videoGameId:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
    }
    let config = {
        tableName:'type:DataTypes.INTEGER',
        allowNull: false,
        timestamps: false
    }
    
    const WishListItems = sequelize.define(alias, cols, config);
    
    return WishListItems;
}