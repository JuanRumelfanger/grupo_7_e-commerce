module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'Products';
    let cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        price:{
            type:DataTypes.STRING
        },
        name:{
            type:DataTypes.STRING
        },
        release_date:{
            type:DataTypes.DATE
        },
        rating:{
            type:DataTypes.INTEGER
        },
        created_at:{
            type:DataTypes.DATE
        },
        updated_a:{
            type:DataTypes.DATE
        }

    }
    let config = {
        tableName:'video_game',
        timestamps:true
    }
    const Product = sequelize.define(alias, cols, config);
    
    return Product;
}