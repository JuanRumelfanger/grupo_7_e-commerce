module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'Product';
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
        plataform:{
            type:DataTypes.STRING,
        },
        genre:{
            type:DataTypes.STRING
        },
        release_date:{
            type:DataTypes.DATE
        },
        size:{
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
    
    Product.associate = function(models) {
        Product.hasMany(models.Review, {
            as: 'reviews',
            foreignKey: 'user_id'
        })
    }


    return Product;
}